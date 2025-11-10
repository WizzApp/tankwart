import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  open: true,
  nodeResolve: true,
  appIndex: 'pages/index.html',
  watch: true,
  plugins: [
    esbuildPlugin({ ts: true }),
  ],
};
