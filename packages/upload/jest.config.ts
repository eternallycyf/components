import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/upload';

const root = '<rootDir>/packages/upload';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
