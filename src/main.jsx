import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import * as pages from './pages';
const router = createBrowserRouter([
	{
		path: '/',
		element: <pages.Home />,
	},
	{
		path: '/Movie',
		element: <pages.MovieDetails />,
	},
	{
		path: '/YourMovies',
		element: <pages.YourMovies />,
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
