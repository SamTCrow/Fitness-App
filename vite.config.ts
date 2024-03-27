import path from "node:path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import dotenv from "dotenv";
import { defineConfig, type PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
dotenv.config();
export default defineConfig({
	plugins: [react(), TanStackRouterVite(), visualizer() as PluginOption],
	define: {
		"process.env": process.env,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
