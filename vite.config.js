import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import wasm from "vite-plugin-wasm";

const __dirname = dirname(fileURLToPath(import.meta.url)) + "/src";

export default defineConfig({
	plugins: [wasm()],
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
