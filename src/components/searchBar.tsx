import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useExerciseByName } from "./utils/fetchData";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const { refetch } = useExerciseByName(search);

	const handleSearch = async () => {
		if (search) {
			refetch();
			setSearch("");
		}
	};

	return (
		<div className="flex max-w-md gap-4 px-4 py-6 -ml-4 scale-75 md:scale-100 md:ml-2">
			<Input
				type="text"
				placeholder="Search Exercise"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value.toLowerCase());
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<Button type="submit" aria-label="search" onClick={handleSearch}>
				<Search />
			</Button>
		</div>
	);
};

export default SearchBar;
