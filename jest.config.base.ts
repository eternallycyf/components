import { Config, createConfig } from '@umijs/test';
import path from 'path';

const base: Config.InitialOptions = createConfig({
  jsTransformer: 'esbuild',
  target: 'node',
});

delete base.testTimeout;

const config: Config.InitialOptions = {
  ...base,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '@ims-view/page-loading': '<rootDir>/packages/page-loading/src',
    '@ims-view/calendar': '<rootDir>/packages/calendar/src',
    '@ims-view/space': '<rootDir>/packages/space/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
};

export default config;
