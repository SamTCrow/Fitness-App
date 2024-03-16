import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from '@/context/themeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';

const queryClient = new QueryClient();

export const Route = createRootRoute({
	component: () => (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider storageKey='vite-ui-theme'>
					<Navbar />
					<Outlet />
					<Footer />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	),
});
