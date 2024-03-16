// Homepage
import Exercises from '@/components/exercises';
import Herobanner from '@/components/herobanner';
import SearchBar from '@/components/searchBar';
import Categories from '@/components/categories';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => (
		<>
			<div className='w-full mx-auto max-w-[1390px]'>
				<Herobanner />
				<div className='lg:hidden'>
					<SearchBar />
				</div>
				<Categories />
				<Exercises />
			</div>
		</>
	),
});
