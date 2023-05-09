import { CardMovie, Carrousel } from '../../components';
import { useRouteLoaderData } from 'react-router';

const HomePage = () => {
	const movies = useRouteLoaderData('root');
	console.log(movies);
	return (
		<div>
			<Carrousel autoSlide={true}></Carrousel>
			<div
				className="flex flex-wrap gap-10 md:gap-16 justify-center 
			items-start mt-16">
				{movies.map((movie, index) => (
					<CardMovie
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
