import { defineConfig } from 'father';

const ignores = [
  '**/demo/**',
  '**/demos/**',
  '**/__tests__/**',
  '**/tests/**',
  '**/*.md',
];

const enableUmd = process.env.BUILD_UMD === '1';

export default defineConfig({
  cjs: {
    output: 'lib',
    platform: 'browser',
    ignores,
  },
  esm: {
    output: 'es',
    ignores,
  },
  ...(enableUmd
    ? {
        umd: {
          output: 'dist',
          externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            antd: 'antd',
            lodash: '_',
            '@ant-design/icons': 'icons',
          },
        },
      }
    : {}),
  extraBabelPlugins: ['add-module-exports'],
});
