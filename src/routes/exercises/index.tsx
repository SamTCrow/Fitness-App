import {
	type Exercise,
	useInfiniteExercises,
} from "@/components/utils/fetchData";
import { useInView } from "react-intersection-observer";
import { createFileRoute } from "@tanstack/react-router";
import { MoreHorizontal } from "lucide-react";
import ExerciseCard from "@/components/exerciseCard";
import { useEffect } from "react";
export const Route = createFileRoute("/exercises/")({
	component: Exercises,
});

function Exercises() {
	const { data, hasNextPage, isSuccess, fetchNextPage, isFetching } =
		useInfiniteExercises("https://exercisedb.p.rapidapi.com/exercises");

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && hasNextPage && !isFetching) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, fetchNextPage, isFetching]);

	const content =
		isSuccess &&
		data.pages.map((page) =>
			page.map((exercise: Exercise) => <ExerciseCard exercise={exercise} />),
		);

	return (
		<>
			<div className="grid w-full gap-5 px-5 mt-5 lg:grid-cols-3 md:grid-cols-2">
				{content}
			</div>
			<MoreHorizontal ref={ref} className="w-8 h-8" />
		</>
	);
}
