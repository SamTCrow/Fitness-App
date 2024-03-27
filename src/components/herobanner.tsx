import { Button } from "./ui/button";
import heroGirl from "../assets/images/heroGirl.webp";

const Herobanner = () => {
	return (
		<div className="flex mx-2 mb-12 mt-14 sm:mx-4">
			<div className="relative hidden w-full lg:block">
				<img
					src={heroGirl}
					alt="heroGirl"
					className="object-cover w-full rounded-lg"
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-transparent from-75% to-background" />
			</div>

			<div className="flex flex-col max-w-md gap-3 mx-auto text-center lg:block lg:w-full lg:text-right lg:my-auto">
				<h1 className="text-2xl font-medium prose text-orange-600 dark:prose-invert lg:text-5xl">
					FitGang
				</h1>
				<h2 className="mx-auto text-5xl font-bold prose dark:prose-invert lg:my-6 lg:text-7xl">
					Just Workout
				</h2>
				<h2 className="text-2xl prose dark:prose-invert lg:my-6 lg:text-4xl ">
					Check our awesome Exercises!
				</h2>
				<Button className="mt-4 text-xl rounded-full">Go training!!</Button>
			</div>
		</div>
	);
};

export default Herobanner;
