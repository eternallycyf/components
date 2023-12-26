import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/page-loading';

const root = '<rootDir>/packages/page-loading';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
