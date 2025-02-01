const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const image = require('@rollup/plugin-image');
const resolve = require('@rollup/plugin-node-resolve').default;
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const postcssurl = require('postcss-url');
const babel = require('@rollup/plugin-babel');
const filesize = require('rollup-plugin-filesize');

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    terser(),
    commonjs(),
    image(),
    resolve(),
    typescript(),
    babel(),
    filesize(),
    postcss({
      modules: true,
      plugins: [
        postcssurl({
          url: 'inline',
          maxSize: 10,
          fallback: 'copy',
        }),
      ],
    }),
  ],
  external: ['react', 'react-dom'],
};
