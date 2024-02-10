import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/space';

const root = '<rootDir>/packages/space';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
