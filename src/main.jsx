import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import * as pages from './pages';
import App from './App';
import { dataLoader } from './services/getMovies';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		id: 'root',
		loader: dataLoader,
		children: [
			{
				path: '/',
				element: <pages.Home />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
