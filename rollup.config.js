import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import prettier from 'rollup-plugin-prettier';
import pkg from './package.json' assert { type: 'json' };

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.exports['.'].import,
        format: 'esm',
      },
      {
        file: pkg.exports['.'].require,
        format: 'cjs',
      },
    ],
    plugins: [
      esbuild({
        include: /\.[jt]sx?$/,
        minify: process.env.NODE_ENV === 'production',
      }),
      peerDepsExternal(),
    ],
  },
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.types,
        format: 'cjs',
      },
    ],
    plugins: [dts(), prettier({ tabWidth: 2 })],
  },
];
