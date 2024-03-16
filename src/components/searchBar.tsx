import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useSearch } from './utils/fetchData';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	const { refetch } = useSearch(search);

	const handleSearch = async () => {
		if (search) {
			refetch();
			setSearch('');
		}
	};

	return (
		<div className='flex py-6 gap-4 max-w-md mx-auto px-4'>
			<Input
				type='text'
				placeholder='Search Exercise'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value.toLowerCase());
				}}
			/>
			<Button type='submit' aria-label='search' onClick={handleSearch}>
				<Search />
			</Button>
		</div>
	);
};

export default SearchBar;
