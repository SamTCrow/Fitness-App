import { Link } from '@tanstack/react-router';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { Button } from './ui/button';
import SearchBar from './searchBar';
import Lightswitch from './lightswitch';

const activeProps = {
	style: {
		fontWeight: 'bold',
	},
};

const menuStyle =
	'flex h-9 w-max items-center justify-center rounded-md px-4 py-2  font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50';

interface MyComponentProps {
	className?: string;
}

const Navbar = () => {
	return (
		<header className='flex h-20 w-full items-center px-4 md:px-6 shadow-foreground shadow-sm sticky'>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						className='lg:hidden absolute right-4'
						size='icon'
						variant='outline'
					>
						<MenuIcon className='h-6 w-6' />
						<span className='sr-only'>Navigation Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='right'>
					<div className='grid gap-2 py-6'>
						<Link
							className='flex w-full items-center py-2 text-lg font-semibold'
							to='/'
							activeProps={activeProps}
						>
							Home
						</Link>
						<Link
							className='flex w-full items-center py-2 text-lg font-semibold'
							to='/exercises'
							activeProps={activeProps}
						>
							Exercises
						</Link>
						<Link
							className='flex w-full items-center py-2 text-lg font-semibold'
							href='#'
						>
							Services
						</Link>
						<Link
							className='flex w-full items-center py-2 text-lg font-semibold'
							href='#'
						>
							Contact
						</Link>
					</div>
				</SheetContent>
			</Sheet>
			<Lightswitch />
			<div className='hidden lg:block ml-2'>
				<SearchBar />
			</div>
			<nav className='ml-auto hidden lg:flex gap-6'>
				<Link className={menuStyle} to='/' activeProps={activeProps}>
					Home
				</Link>
				<Link className={menuStyle} to='/exercises' activeProps={activeProps}>
					Exercises
				</Link>
				<Link className={menuStyle} href='#'>
					Services
				</Link>
				<Link className={menuStyle} href='#'>
					Contact
				</Link>
			</nav>
		</header>
	);
};

function MenuIcon(props: MyComponentProps) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}

export default Navbar;
