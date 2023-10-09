import { useUser } from "../../models/user";

export function About() {
	const { avatarUrl, fetchUser } = useUser();

	fetchUser();

	const startDate = new Date(2016, 5);
	const timeInIndustry = new Date().getTime() - startDate.getTime();
	const yearsInIndustry = Math.floor(timeInIndustry / 31536000000)

	return (
		<>
			<h1 className="mb-4">About</h1>
			{ avatarUrl && (
				<img src={avatarUrl}></img>
			)}
			<p>
				I'm a Software Developer with over {yearsInIndustry} years of experience who is passionate about applying my skills to enact positive change, both in the teams I am a part of and at a larger scale.
			</p>
		</>
	);
}
