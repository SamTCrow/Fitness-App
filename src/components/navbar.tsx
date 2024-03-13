import { Link } from '@tanstack/react-router';

const activeProps = {
	style: {
		fontWeight: 'bold',
	},
};

const Navbar = () => {
	return (
		<div className='w-full flex sticky'>
			<Link to='/' activeProps={activeProps}>
				Home
			</Link>
			<Link to='/exercises' activeProps={activeProps}>
				Exercises
			</Link>
		</div>
	);
};

export default Navbar;
