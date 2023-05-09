import { FaStar } from 'react-icons/fa';

const Card = ({ movie }) => {
	return (
		<div className="flex flex-col border border-gray-400 p-4 pb-11 bg-[#FCFCFC] md:w-[15.5rem] md:h-[37.6rem] rounded-2xl w-5/6 md:items-start items-center ">
			<img
				src={movie['image_url']}
				alt={movie.title}
				className="rounded-2xl w-[15.5rem] md:min-h-[23.25rem] h-72"
			/>
			<div className="h-[9.6rem] flex flex-col items-start gap-4">
				<h1 className="text-lg font-semibold">{movie.title}</h1>
				<h3 className="text-sm font-medium">Ano de lançamento:{movie.year}</h3>
				<p className="font-normal text-sm">{movie.crew}</p>
				<div className="flex bg-slideworks-900 h-6 w-20 justify-around items-center rounded-full p-1 self-center">
					<FaStar
						className="text-white"
						size={14}
					/>
					<span className="text-white text-sm">{movie.rating}/10</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
