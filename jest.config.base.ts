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
    '@ims-view/icon': '<rootDir>/packages/icon/src',
    '@ims-view/watermark': '<rootDir>/packages/watermark/src',
    '@ims-view/upload': '<rootDir>/packages/upload/src',
    '@ims-view/form': '<rootDir>/packages/form/src',
    '@ims-view/message': '<rootDir>/packages/message/src',
    '@ims-view/popover': '<rootDir>/packages/popover/src',
    '@ims-view/tour': '<rootDir>/packages/tour/src',
    '@ims-view/lazyload': '<rootDir>/packages/lazyload/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
};

export default config;
