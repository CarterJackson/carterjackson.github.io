export default function Headshot({ width, className }: { width: string, className: string }) {
	return (
		<img src="/headshot.jpg" alt="Headshot" width={width} className={className}></img>
	);
}
