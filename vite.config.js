import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url)) + "/src";

export default defineConfig({
	root: "src",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
			output: {
				dir: "./dist",
			},
		},
	},
});
