import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/themeProvider';
import Navbar from '@/components/navbar';
import Footer from './../components/ui/footer';

export const Route = createRootRoute({
	component: () => (
		<>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<Navbar />
				<Outlet />
				<Footer />
			</ThemeProvider>
		</>
	),
});
