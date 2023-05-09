import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Desculpe, um erro inesperado aconteceu.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
