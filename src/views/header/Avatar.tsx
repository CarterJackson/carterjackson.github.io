interface Props {
	src: string;
	width?: string;
}

function Avatar({ src, width }: Props) {
	return (
		<img
			className="rounded-full"
			src={src}
			alt="Avatar"
			width={width}
		></img>
	);
}

export default Avatar;
