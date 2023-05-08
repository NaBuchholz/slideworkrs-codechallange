import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

const Carrousel = ({ autoSlide = false, autoSlideInterval = 2800 }) => {
	const [current, setCurrent] = useState(0);
	const movies = useRouteLoaderData('root');
	const moviesForCarrousel = movies.slice(8, 11);
	const prev = () =>
		setCurrent((current) => (current === 0 ? moviesForCarrousel.length - 1 : current - 1));
	const next = () =>
		setCurrent((current) => (current === moviesForCarrousel.length - 1 ? 0 : current + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className="overflow-hidden relative h-[577.5px]">
			<div
				className="flex transition-transform ease-out duration-500 "
				style={{ transform: `translateX(-${current * 100}%)` }}>
				{movies.slice(8, 11).map((movie, index) => (
					<img
						src={movie['image_url']}
						key={index}
						className="md:min-w-full md:-translate-y-56 object-cover brightness-50 min-h-screen"
					/>
				))}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="p-1 text-white opacity-60 hover:opacity-100">
					<FaChevronLeft size={40} />
				</button>
				{moviesForCarrousel.map((movie, index) => (
					<div
						key={index}
						className="flex transition-transform ease-out duration-500  text-white text-2xl min-w-full justify-items-end"
						style={{ transform: `translateX(-${current * 100}%)` }}>
						<div className="h-52 flex flex-col justify-evenly font-bold md:w-[34.9rem] w-2/3">
							<p className="drop-shadow-lg text-sm">Destaques do Mês</p>
							<h1 className="md:text-[2.5rem] drop-shadow-lg leading-normal font-normal text-2xl">
								{movie.title}
							</h1>
							<div className="flex flex-col md:flex-row justify-start gap-8 md:text-lg text-sm">
								<div className="bg-slideworks-900 w-16 h-8 md:w-[94px] md:h-[37px] rounded-2xl	flex justify-center items-center gap-1 ">
									<FaStar />
									<p>{movie.rating}/10</p>
								</div>
								<p className="drop-shadow-lg font-normal">{movie.crew}</p>
							</div>
						</div>
					</div>
				))}
				<button
					onClick={next}
					className="absolute p-1 text-white opacity-60 hover:opacity-100 right-2">
					<FaChevronRight size={40} />
				</button>
			</div>
			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{moviesForCarrousel.map((_, index) => (
						<div
							className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${current === index ? 'p-2' : 'bg-gray-400'}
            `}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carrousel;
