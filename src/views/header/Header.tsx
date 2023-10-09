import { Link } from "react-router-dom";
import { useUser } from "../../models/user";

export function Header() {
	const { name } = useUser();

	return (
		<div className="flex items-center justify-between h-14 py-1 px-4 bg-gray-800">
			<Link to="about" className="flex text-2xl text-gray-100 hover:text-gray-400">{name}</Link>
			<div className="[&>*]:mx-2 text-xl">
				<Link to="about">About</Link>
				<Link to="projects">Projects</Link>
			</div>
		</div>
	)
}
