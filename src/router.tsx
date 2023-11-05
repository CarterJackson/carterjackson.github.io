import { createBrowserRouter, Navigate } from 'react-router-dom';
import aboutRoutes from '@/components/about/routes';
import projectRoutes from '@/components/projects/routes';
import AppLayout from '@/AppLayout';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{ path: '/', element: <Navigate to="/about" /> },
				...projectRoutes,
				...aboutRoutes,
			],
		},
	]
);
