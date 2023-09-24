interface Props {
	src: string;
}

function Avatar({ src }: Props) {
	return (
		<img className="rounded-full" src={src} alt="Avatar"></img>
	);
}

export default Avatar;
