import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: 'json' };

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
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
        tsconfig: 'tsconfig.build.json',
        jsx: 'automatic',
      }),
      peerDepsExternal(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.exports['.'].types,
        format: 'cjs',
      },
    ],
    plugins: [
      dts({
        tsconfig: 'tsconfig.build.json',
      }),
    ],
  },
];
