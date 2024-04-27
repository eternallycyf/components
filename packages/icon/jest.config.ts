import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/icon';

const root = '<rootDir>/packages/icon';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
