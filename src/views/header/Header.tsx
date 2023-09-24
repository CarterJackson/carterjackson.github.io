import { useUser } from "../../models/user";
import { Avatar } from "./Avatar";

function Header() {
	const { name, avatarUrl } = useUser();

	let profileLinkContent = <div>{name}</div>;
	if (avatarUrl) {
		profileLinkContent = <Avatar src={avatarUrl}></Avatar>;
	}

	return (
		<div className="flex justify-between h-12">
			<a className="flex mx-1 mt-1">{profileLinkContent}</a>
			<div>right header</div>
		</div>
	)
}

export default Header;
