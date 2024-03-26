import { Badge } from "./ui/badge";
import { Link } from "@tanstack/react-router";
import { capitalize } from "./navbar";
import type { Exercise } from "./utils/fetchData";
import { nanoid } from "nanoid";


const Detail = ({
	name,
	gifUrl,
	instructions,
	target,
	bodyPart,
	equipment,
}: Exercise) => {
	

	return (
		<>
			<div className="flex flex-col mx-auto my-10 text-center align-middle justify-evenly lg:flex-row lg:w-3/4 lg:gap-3 grow">
				<div className="flex items-center justify-center">
					<img src={gifUrl} alt={name} className="rounded-lg" />
				</div>
				<div className="w-full mx-auto mt-4 prose lg:mt-0 dark:prose-invert lg:text-right lg:justify-end lg:mx-4">
					<h1>{capitalize(name)}</h1>
					{instructions.map((instruction) => (
						<p key={nanoid()}>{instruction}</p>
					))}
					<div className="flex justify-end gap-3">
						<Link to={target && `/target/${target}`}>
							<Badge>{target}</Badge>
						</Link>
						<Link to={bodyPart && `/bodypart/${bodyPart}`}>
							<Badge>{bodyPart}</Badge>
						</Link>
						<Link to={equipment && `/equipment/${equipment}`}>
							<Badge>{equipment}</Badge>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
