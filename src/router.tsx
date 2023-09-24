import { createBrowserRouter, Navigate } from 'react-router-dom';
import aboutRoutes from './views/about/routes';
import AppLayout from './AppLayout';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <AppLayout />,
			children: [
				// ...projectRoutes,
				...aboutRoutes,
				{ path: '/', element: <Navigate to="/about" /> },
			],
		},
	]
);
