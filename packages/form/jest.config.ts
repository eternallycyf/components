import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/form';

const root = '<rootDir>/packages/form';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
