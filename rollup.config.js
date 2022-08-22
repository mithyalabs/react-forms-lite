import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        external({
            include: ['**/*.css'],
        }),
        resolve(),
        typescript({
            exclude: '**/__tests__/**',
            clean: true,
        }),
        scss(),
        commonjs({
            include: ['node_modules/**'],
            namedExports: {
                'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render'],
                'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
                'node_modules/prop-types/index.js': ['elementType'],
            },
        }),
    ],
};
