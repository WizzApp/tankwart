import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fileURLToPath } from "url";

export default {
	open: true,
	nodeResolve: true,
	appIndex: "src/index.html",
	watch: true,
	plugins: [
		esbuildPlugin({
			ts: true,
			tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
		}),
	],
	middleware: [
		// handle open-props beta package here.
		function rewriteOpenPropsImport(context, next) {
			console.log(context);
			if (
				context.request.url.startsWith("/src/style/opbeta/") &&
				context.request.url.endsWith(".css")
			) {
				console.log(context);
				context.request.url = context.request.url.replace(
					"/src/style/",
					"/node_modules/"
				);
				console.log(context);
			}

			return next();
		},
	],
};
