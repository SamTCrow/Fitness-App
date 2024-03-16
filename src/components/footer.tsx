import { useSearch } from './utils/fetchData';

const Footer = () => {
	const { data } = useSearch('');
	const results = data?.map((searchResult) => (
		<li key={searchResult.data.id}>{searchResult.data.name}</li>
	));

	return (
		<div className='w-full absolute inset-x-0 bottom-0'>
			<ul>{results}</ul>
		</div>
	);
};

export default Footer;
