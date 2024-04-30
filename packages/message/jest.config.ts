import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/message';

const root = '<rootDir>/packages/message';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
