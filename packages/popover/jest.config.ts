import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/popover';

const root = '<rootDir>/packages/popover';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
