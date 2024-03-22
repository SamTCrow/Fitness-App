import { createFileRoute } from "@tanstack/react-router";
import { useExerciseById } from "@/components/utils/fetchData";
export const Route = createFileRoute("/exercises/$id")({
	component: Exercise,
});
function Exercise() {
	const { id } = Route.useParams();
	const { data } = useExerciseById(id);

	if (data) {
		console.log(data);
	}

	return <div>Hello /exercise/ {id}!</div>;
}
