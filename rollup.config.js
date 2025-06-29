import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/universal-okta-auth.umd.js',
            format: 'umd',
            name: 'UniversalOktaAuth',
            globals: {
                '@okta/okta-auth-js': 'OktaAuth'
            }
        },
        {
            file: 'dist/universal-okta-auth.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
        polyfillNode(),
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),
    ],
    external: ['@okta/okta-auth-js']
};
