import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/lazyload';

const root = '<rootDir>/packages/lazyload';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
