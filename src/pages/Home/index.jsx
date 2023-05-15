import { CardMovie, Carrousel } from '../../components';
import { useRouteLoaderData } from 'react-router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function HomePage({ currentItems }) {
	return (
		<div className="mb-16">
			<Carrousel autoSlide={true}></Carrousel>
			<div className="flex flex-wrap gap-10 md:gap-16 justify-center items-start mt-16">
				{currentItems.map((movie, index) => (
					<CardMovie
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
}

export default function PaginatedMovies() {
	const movies = useRouteLoaderData('root');
	const [itemOffset, setItemOffset] = useState(0);
	const moviesPerPage = 10;
	const endOffset = itemOffset + moviesPerPage;

	const currentItems = movies.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(movies.length / moviesPerPage);

	const handlePageClick = (event) => {
		const newOffset = event.selected * moviesPerPage;

		setItemOffset(newOffset);
	};

	return (
		<>
			<HomePage currentItems={currentItems} />
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
				className="flex justify-center"
			/>
		</>
	);
}
