// Homepage
import Exercises from "@/components/exercises";
import Herobanner from "@/components/herobanner";
import Categories from "@/components/categories";
import { createFileRoute } from "@tanstack/react-router";

import { Dumbbell } from "lucide-react";
import { Syringe } from "lucide-react";
import { Weight } from "lucide-react";
import { equipment, bodypart, target } from "@/components/navbar";
const indexComponent = () => {
	return (
		<div className="w-full mx-auto max-w-[1390px]">
			<Herobanner />
			<Categories
				cat={target}
				Icon={Dumbbell}
				title="Target"
				section="target"
			/>
			<Categories
				cat={bodypart}
				Icon={Syringe}
				title="Body Parts"
				section="bodypart"
			/>
			<Categories
				cat={equipment}
				Icon={Weight}
				title="Equipment"
				section="equipment"
			/>
			<Exercises />
		</div>
	);
};

export const Route = createFileRoute("/")({
	component: indexComponent,
});
