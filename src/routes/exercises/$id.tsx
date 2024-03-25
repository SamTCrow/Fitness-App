import { createFileRoute } from "@tanstack/react-router";
import { useExerciseById } from "@/components/utils/fetchData";

import Detail from "@/components/detail";
export const Route = createFileRoute("/exercises/$id")({
	component: Exercise,
});
function Exercise() {
	const { id } = Route.useParams();
	const { data } = useExerciseById(id);

	if (data) {
		return (
			<>
				<Detail {...data} />
			</>
		);
	}
}
