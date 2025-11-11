import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fileURLToPath } from 'url';

export default {
  open: true,
  nodeResolve: true,
  appIndex: 'pages/index.html',
  watch: true,
  plugins: [
    esbuildPlugin({ ts: true, tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url))}),
  ],
};
