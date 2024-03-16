import { Button } from './ui/button';
import heroGirl from '../assets/images/heroGirl.png';

const Herobanner = () => {
	return (
		<div className='mt-4 lg:mt-6 mx-2 sm:mx-4 flex'>
			<div className='w-full hidden lg:block relative'>
				<img
					src={heroGirl}
					alt='heroGirl'
					className='w-full  object-cover rounded-lg'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-transparent from-75% to-background' />
			</div>

			<div className='text-center flex flex-col max-w-md mx-auto gap-3 lg:block lg:w-full lg:text-right lg:my-auto'>
				<h1 className='text-2xl lg:text-5xl font-medium text-orange-600'>
					FitGang
				</h1>
				<h2 className='text-5xl lg:my-6 mx-auto lg:text-7xl font-bold'>
					Just Workout
				</h2>
				<h2 className='text-2xl lg:my-6 lg:text-4xl '>
					Check our awesome Exercises!
				</h2>
				<Button className='mt-4 text-xl rounded-full'>Go training!! </Button>
			</div>
		</div>
	);
};

export default Herobanner;
