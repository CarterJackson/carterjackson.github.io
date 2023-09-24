
interface Props {
	src: string;
}

export function Avatar({ src }: Props) {
	return (
		<img className="rounded-full" src={src} alt="Avatar"></img>
	);
}
