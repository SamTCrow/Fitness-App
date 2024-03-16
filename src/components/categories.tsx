import { useCategories } from './utils/fetchData';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Dumbbell } from 'lucide-react';
const Categories = () => {
	const { data } = useCategories();

	return (
		<>
			<Carousel className='w-[80%] mx-auto my-12'>
				<CarouselContent>
					{data?.map((cat) => (
						<CarouselItem
							key={cat.id}
							className='lg:basis-1/3 md:basis-1/2 flex justify-center'
						>
							<div className='flex flex-col items-center'>
								<Dumbbell className='w-[60px] h-[60px]' />
								<p className='mt-4 text-lg'>{cat.name}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>{' '}
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
};

export default Categories;
