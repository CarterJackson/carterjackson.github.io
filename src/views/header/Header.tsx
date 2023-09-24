import { Link } from "react-router-dom";
import { useUser } from "../../models/user";
import Avatar from "./Avatar";

export function Header() {
	const { name, avatarUrl } = useUser();

	// TODO: Base link styling
	let profileLinkContent = <div>{name}</div>;
	if (avatarUrl) {
		profileLinkContent = <Avatar src={avatarUrl} width="45"></Avatar>;
	}

	return (
		<div className="flex items-center justify-between h-14 py-1 px-4 bg-gray-700">
			<Link to="about" className="flex">{profileLinkContent}</Link>
			<div>TODO: nav</div>
		</div>
	)
}
