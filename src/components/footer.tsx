const Footer = () => {
	return (
		<footer className="fixed bottom-0 min-w-full prose text-center shadow-inner shadow-background dark:prose-invert bg-background justify-self-center">
			<p>{new Date().getFullYear()} &copy; FitGang by SamTCrow</p>
		</footer>
	);
};

export default Footer;
