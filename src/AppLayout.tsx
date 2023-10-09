import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useUser } from "./models/user";

function AppLayout() {
	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<Header />
			<Body />
		</div>
	)
}

export function Header() {
	const { name } = useUser();

	return (
		<div className="h-14 py-1 px-4 bg-gray-800 w-full flex justify-center">
			<div className="h-full flex items-center justify-between max-w-6xl w-full">
				<Link to="about" className="flex text-2xl text-gray-100 hover:text-gray-400">{name}</Link>
				<div className="[&>*]:mx-2 text-xl">
					<Link to="about">About</Link>
					<Link to="projects">Projects</Link>
				</div>
			</div>
		</div>
	)
}

export function Body() {
	return (
		<div className="relative p-4 max-w-6xl w-full">
			<Outlet />
		</div>
	)
}

export default AppLayout;
