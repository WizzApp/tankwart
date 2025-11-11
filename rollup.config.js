import { nodeResolve } from "@rollup/plugin-node-resolve";
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import copy from "rollup-plugin-copy";
import path from "path";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "*.html",
	output: { dir: "dist" },
	plugins: [
		html({
			rootDir: path.join(process.cwd(), "src"),
			flattenOutput: false,
			minify: true,
		}),
		nodeResolve(),
		typescript(),
		copy({
			targets: [
				{ src: "src/style/**/*.css", dest: "dist/assets" },
				// handle open-props beta package here.
				{
					src: "node_modules/opbeta/**/*.css",
					dest: "dist/assets/style",
				},
			],
			flatten: false,
		}),
	],
};
