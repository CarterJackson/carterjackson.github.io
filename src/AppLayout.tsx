import { Outlet, Link } from 'react-router-dom';

export default function AppLayout() {
	return (
		<div className="min-h-screen w-screen flex flex-col items-center">
			<Header />
			<Body />
		</div>
	)
}

function Header() {
	return (
		<div className="h-14 py-1 px-4 bg-neutral-800 w-full flex justify-center">
			<div className="h-full flex items-center justify-between max-w-6xl w-full">
				<Link to="about" className="flex text-2xl text-gray-100 hover:text-gray-400">Carter Jackson</Link>
				<span className="uppercase text-gray-400">This site is a work in progress</span>
				<div className="[&>*]:ml-8 text-xl">
					<Link to="about">About</Link>
					<Link to="projects">Projects</Link>
					{/* TODO: Dark/light mode toggle */}
				</div>
			</div>
		</div>
	)
}

function Body() {
	return (
		<div className="relative h-full w-full bg-neutral-900 flex justify-center flex-grow">
			<div className="px-4 py-10 max-w-6xl w-full">
				<Outlet />
			</div>
		</div>
	)
}
