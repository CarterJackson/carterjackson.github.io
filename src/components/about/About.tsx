import Headshot from "@/components/about/Headshot";

export default function About() {
	const startDate = new Date(2016, 5);
	const timeInIndustry = new Date().getTime() - startDate.getTime();
	const yearsInIndustry = Math.floor(timeInIndustry / 31536000000)

	return (
		<>
			<h1 className="mb-10">About</h1>
			<div className="flex justify-between mb-12">
				<p>
					I am a Software Developer with over {yearsInIndustry} years of experience who is passionate about applying my skills to enact positive change, both in the teams I am a part of and at a larger scale.
					I enjoy solving difficult technical issues and aligning stakeholders on maintainable and effective solutions.
				</p>
				<Headshot width="300" className="ml-4" />
			</div>
			<div className="flex justify-between">
				<p>
					I live in North Carolina with my wife and our dog, Henry.
				</p>
				<img src="/henry.jpg" alt="Henry" width="300" className="ml-4"></img>
			</div>
		</>
	);
}
