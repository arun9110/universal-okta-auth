import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/universal-okta-auth.umd.js',
            format: 'umd',
            name: 'UniversalOktaAuth',
            globals: {
                crypto: 'crypto',
                buffer: 'buffer',
                process: 'process',
                stream: 'Stream',
                http: 'http',
                url: 'Url',
                zlib: 'zlib',
                events: 'events',
                punycode: 'punycode',
                https: 'https',
            },
        },
        {
            file: 'dist/universal-okta-auth.esm.js',
            format: 'esm'
        }
    ],
    plugins: [polyfillNode(), resolve({ preferBuiltins: false }), commonjs()],
    external: [
        'crypto', 'buffer', 'process', 'stream', 'http',
        'url', 'https', 'zlib', 'events', 'punycode'
    ]
};
