import { type RouteObject } from 'react-router-dom';
import { Projects } from '@/components/projects/Projects';

const routes: RouteObject[] = [
	{
		path: '/projects',
		element: <Projects />,
	},
];

export default routes;
