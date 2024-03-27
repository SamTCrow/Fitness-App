import { Link } from "@tanstack/react-router";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import SearchBar from "./searchBar";
import Lightswitch from "./lightswitch";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";
import { nanoid } from "nanoid";

const activeProps = {
	style: {
		fontWeight: "bold",
	},
};

export const capitalize = (string: string | undefined) => {
	if (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};

interface MyComponentProps {
	className?: string;
}

export const target = [
	"abductors",
	"abs",
	"adductors",
	"biceps",
	"calves",
	"cardiovascular system",
	"delts",
	"forearms",
	"glutes",
	"hamstrings",
	"lats",
	"levator scapulae",
	"pectorals",
	"quads",
	"sartorius",
	"serratus anterior",
	"spine",
	"traps",
	"triceps",
	"upper back",
];

export const equipment = [
	"assisted",
	"band",
	"barbell",
	"body weight",
	"bosu ball",
	"cable",
	"dumbbell",
	"elliptical machine",
	"ez barbell",
	"hammer",
	"kettlebell",
	"leverage machine",
	"medicine ball",
	"olympic barbell",
	"resistance band",
	"roller",
	"rope",
	"skierg machine",
	"sled machine",
	"smith machine",
	"stability ball",
	"stationary bike",
	"stepmill machine",
	"tire",
	"trap bar",
	"upper body ergometer",
	"weighted",
	"wheel roller",
];

export const bodypart = [
	"back",
	"cardio",
	"chest",
	"lower arms",
	"lower legs",
	"neck",
	"shoulders",
	"upper arms",
	"upper legs",
	"waist",
];

const Navbar = () => {
	return (
		<header className="sticky top-0 flex items-center w-full h-20 px-4 shadow-sm md:px-6 shadow-foreground bg-background z-[2]">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						className="absolute lg:hidden right-4"
						size="icon"
						variant="outline"
					>
						<MenuIcon className="w-6 h-6" />
						<span className="sr-only">Navigation Menu</span>
					</Button>
				</SheetTrigger>

				<SheetContent
					side="right"
					className="flex flex-col gap-3 text-lg font-medium"
				>
					<ScrollArea className="flex flex-col h-full leading-9">
						<Link to="/" activeProps={activeProps} className="block">
							Home
						</Link>
						<Link to="/exercises" activeProps={activeProps} className="block">
							Exercises
						</Link>
						<Collapsible>
							<CollapsibleTrigger>Target</CollapsibleTrigger>
							<CollapsibleContent>
								{target.map((target) => (
									<Link
										key={nanoid()}
										to={target && `/target/${target}`}
										activeProps={activeProps}
										className="flex flex-col py-1 text-sm hover:font-bolder hover:text-orange-500 indent-4"
									>
										{capitalize(target)}
									</Link>
								))}
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger>Body Parts</CollapsibleTrigger>
							<CollapsibleContent>
								{bodypart.map((bodypart) => (
									<Link
										key={nanoid()}
										to={bodypart && `/bodypart/${bodypart}`}
										activeProps={activeProps}
										className="flex flex-col py-1 text-sm hover:font-bolder hover:text-orange-500 indent-4"
									>
										{capitalize(bodypart)}
									</Link>
								))}
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger>Equipment</CollapsibleTrigger>
							<CollapsibleContent>
								{equipment.map((equipment) => (
									<Link
										key={nanoid()}
										to={equipment && `/equipment/${equipment}`}
										activeProps={activeProps}
										className="flex flex-col py-1 text-sm hover:font-bolder hover:text-orange-500 indent-4"
									>
										{capitalize(equipment)}
									</Link>
								))}
							</CollapsibleContent>
						</Collapsible>
					</ScrollArea>
				</SheetContent>
			</Sheet>
			<Lightswitch />

			<SearchBar />

			<nav className="hidden gap-6 ml-auto lg:flex">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link
								to="/"
								activeProps={activeProps}
								className={navigationMenuTriggerStyle()}
							>
								Home
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								to="/exercises"
								activeProps={activeProps}
								className={navigationMenuTriggerStyle()}
							>
								Exercises
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Target</NavigationMenuTrigger>
							<NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								{target.map((target) => (
									<Link
										key={nanoid()}
										to={target && `/target/${target}`}
										activeProps={activeProps}
									>
										{capitalize(target)}
									</Link>
								))}
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Body Part</NavigationMenuTrigger>
							<NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								{bodypart.map((bodypart) => (
									<Link
										key={nanoid()}
										to={bodypart && `/bodypart/${bodypart}`}
										activeProps={activeProps}
									>
										{capitalize(bodypart)}
									</Link>
								))}
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Equipment</NavigationMenuTrigger>
							<NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								{equipment.map((equipment) => (
									<Link
										key={nanoid()}
										to={equipment && `/equipment/${equipment}`}
										activeProps={activeProps}
									>
										{capitalize(equipment)}
									</Link>
								))}
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</header>
	);
};

function MenuIcon(props: MyComponentProps) {
	return (
		<svg
			aria-label="nav-menu"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Menu</title>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

export default Navbar;
