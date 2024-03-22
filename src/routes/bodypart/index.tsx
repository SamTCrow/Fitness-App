import { createFileRoute } from "@tanstack/react-router";

export const Bodypart = () => {
  
	return <div>Bodypart</div>;
};


export const Route = createFileRoute("/bodypart/")({
	component: Bodypart,
});
