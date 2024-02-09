import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/calendar';

const root = '<rootDir>/packages/calendar';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
