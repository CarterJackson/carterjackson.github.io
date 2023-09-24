import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <AppLayout />,
			children: [
				// ...aboutRoutes,
				// ...projectRoutes,
				// { path: '/', element: <Navigate to="/projects" /> },
			],
		},
	]
);
