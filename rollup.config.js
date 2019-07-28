import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const base = {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies)
};

function makePlugins(minify) {
  return [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    nodeResolve(),
    commonjs(),
    minify && terser()
  ];
}
const esm = {
  ...base,
  output: {
    format: 'esm',
    file: pkg.module
  },
  plugins: makePlugins(false)
};

const cjs = {
  ...base,
  output: {
    format: 'cjs',
    file: pkg.main
  },
  plugins: makePlugins(true)
};

const umd = {
  ...base,
  output: {
    format: 'umd',
    name: 'ReactRelayLocalQueryRenderer',
    file: `dist/index.umd.${process.env.NODE_ENV}.js`
  },
  plugins: makePlugins(process.env.NODE_ENV === 'production')
};

export default [umd, cjs, esm];
