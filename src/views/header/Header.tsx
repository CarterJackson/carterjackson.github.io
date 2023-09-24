import { useUser } from "../../models/user";
import Avatar from "./Avatar";

export function Header() {
	const { name, avatarUrl } = useUser();

	let profileLinkContent = <div>{name}</div>;
	if (avatarUrl) {
		profileLinkContent = <Avatar src={avatarUrl}></Avatar>;
	}

	return (
		<div className="flex justify-between h-12 py-1 px-4">
			<a className="flex">{profileLinkContent}</a>
			<div>TODO: nav</div>
		</div>
	)
}
