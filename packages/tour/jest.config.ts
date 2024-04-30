import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/tour';

const root = '<rootDir>/packages/tour';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
