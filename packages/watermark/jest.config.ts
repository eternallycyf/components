import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/watermark';

const root = '<rootDir>/packages/watermark';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
