const Footer = () => {
	return (
		<div className="fixed inset-x-0 bottom-0 min-w-full prose text-center shadow-inner shadow-background dark:prose-invert bg-background justify-self-center">
			<p>{new Date().getFullYear()} &copy; FitGang by SamTCrow</p>
		</div>
	);
};

export default Footer;
