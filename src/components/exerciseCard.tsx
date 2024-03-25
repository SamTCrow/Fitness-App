import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Mountain } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Exercise } from "./utils/fetchData";
export const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
	return (
		<Card className="flex flex-col  max-w-[300px] mx-auto cursor-pointer justify-evenly sm:max-w-full w-full hover:border-orange-500">
			<Link to={exercise.id && `/exercises/${exercise.id}`} key={exercise.id}>
				<CardHeader>
					<CardTitle className="justify-center prose text-center truncate text-md dark:prose-invert ">
						{exercise.name.toUpperCase()}
					</CardTitle>
				</CardHeader>
				<CardContent>
					{exercise.gifUrl === null ? (
						<Mountain className="w-32 h-32 mx-auto mt-5" />
					) : (
						<img
							src={exercise.gifUrl}
							alt={exercise.name}
							className="mx-auto"
						/>
					)}
				</CardContent>
			</Link>
			<CardFooter className="flex gap-3">
				<Link to={exercise.target && `/target/${exercise.target}`}>
					<Badge>{exercise.target}</Badge>
				</Link>
				<Link to={exercise.bodyPart && `/bodypart/${exercise.bodyPart}`}>
					<Badge>{exercise.bodyPart}</Badge>
				</Link>
				<Link to={exercise.equipment && `/equipment/${exercise.equipment}`}>
					<Badge>{exercise.equipment}</Badge>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default ExerciseCard;
