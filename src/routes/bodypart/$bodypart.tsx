import { createFileRoute } from "@tanstack/react-router";
import ExerciseCard from "@/components/exerciseCard";
import {
	useInfiniteExercises,
	type Exercise,
} from "@/components/utils/fetchData";
import { MoreHorizontal } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Route = createFileRoute("/bodypart/$bodypart")({
	component: Bodypart,
});

function Bodypart() {
	const { bodypart } = Route.useParams();
	const { data, hasNextPage, isSuccess, fetchNextPage, isFetching } =
		useInfiniteExercises(
			`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
		);

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
			<div className="grid w-full gap-5 px-5 my-5 lg:grid-cols-3 md:grid-cols-2">
				{content}
			</div>
			{hasNextPage && <MoreHorizontal ref={ref} className="w-8 h-8" />}
		</>
	);
}
