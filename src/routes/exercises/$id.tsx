import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/exercises/$id')({
	component: Exercise,
});

function Exercise() {
	const { id } = Route.useParams();
	return <div>Hello /exercise/ {id}!</div>;
}
