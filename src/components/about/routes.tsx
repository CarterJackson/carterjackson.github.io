import { type RouteObject } from 'react-router-dom';
import About from '@/components/about/About';

const routes: RouteObject[] = [
	{
		path: '/about',
		element: <About />,
	},
];

export default routes;
