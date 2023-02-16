import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import sass from 'rollup-plugin-sass';
import alias from "@rollup/plugin-alias";
import pkg from "./package.json" assert {type:"json"};

import path from 'path';
const relativePath = path.resolve(path.dirname(new URL(import.meta.url).pathname),'node_modules','react-forms-lite', 'dist');
console.log(relativePath);

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        },
    ],
    plugins: [
        external(),
        sass({
            input: 'src/**/*.module.scss',
            output:"dist/index.css"
        }),
        alias({
            entries: {
              "@react-forms-lite": relativePath,
            },
        }), 
        resolve({
            browser: true
        }),
        typescript({
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            include: ["node_modules/**"],           
        }),

    ]
};