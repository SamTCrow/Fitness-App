import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/context/themeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// biome-ignore lint/style/useNumberNamespace: <explanation>
			staleTime: Infinity,
		},
	},
});

export const Route = createRootRoute({
	component: () => (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider storageKey="vite-ui-theme">
					<Navbar />
					<Outlet />
					<Footer />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	),
});
