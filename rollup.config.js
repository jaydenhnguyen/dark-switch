const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const svg = require('rollup-plugin-svg');
const external = require('rollup-plugin-peer-deps-external');

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    external(),
    resolve(),
    typescript(),
    commonjs(),
    svg(),
    postcss({
      modules: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
