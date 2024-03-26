import { useExerciseByName } from "./utils/fetchData";
import { ExerciseCard } from "./exerciseCard";
import { nanoid } from "nanoid";

const Exercises = () => {
	const { data } = useExerciseByName("");

	return (
		<>
			<h1 className="w-full mx-auto mt-5 mb-5 text-lg prose text-center dark:prose-invert">
				Search results
			</h1>
			<div className="grid w-full gap-5 px-10 mb-5 lg:grid-cols-3 md:grid-cols-2">
				{data?.map((exercise) => (
					<ExerciseCard key={nanoid()} exercise={exercise} />
				))}
			</div>
		</>
	);
};

export default Exercises;
