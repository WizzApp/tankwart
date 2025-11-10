import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

export default {
  input: '*.html',
  output: { dir: 'dist' },
  plugins: [html({rootDir: path.join(process.cwd(), 'pages'), flattenOutput: false, minify: true}), nodeResolve()],
};
