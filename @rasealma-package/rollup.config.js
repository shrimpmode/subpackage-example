import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

const config = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    plugins: [
      commonjs(),
      typescript({
        include: ['**/*.js+(|x)', './src/**/*.ts+(|x)'],
        exclude: ['node_modules/**/*']
      }),
      resolve({
        module: false,
        browser: true
      })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  }
]

export default config
