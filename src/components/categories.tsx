import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { nanoid } from "nanoid";

type CategoryProps = {
	cat: string[];
	Icon: LucideIcon;
	title: string;
	section: string;
};
const Categories = ({ cat, Icon, title, section }: CategoryProps) => {
	return (
		<div className="flex flex-col justify-center w-full text-center align-middle">
			<h1 className="w-full mx-auto mt-2 text-lg font-medium prose dark:prose-invert">
				{title}
			</h1>
			<Carousel className="w-[70%] mx-auto my-4">
				<CarouselContent className="">
					{cat?.map((cat) => (
						<Link to={cat && `/${section.toLowerCase()}/${cat.toLowerCase()}`}>
							<CarouselItem
								key={nanoid()}
								className="flex justify-center h-full lg:basis-1/4 md:basis-1/3 basis-1"
							>
								<div
									className="flex flex-col items-center py-4 my-4 mx-4 cursor-pointer hover:text-orange-500
							 transition-colors border-solid border-foreground border-2 rounded-lg hover:border-orange-500 
							 min-w-[200px] hover:scale-105 overflow-visible"
								>
									<Icon className="w-[60px] h-[60px]" />
									<p className="mt-4 prose dark:prose-invert">
										{cat.toUpperCase()}
									</p>
								</div>
							</CarouselItem>
						</Link>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default Categories;
