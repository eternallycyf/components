import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import { footer } from 'ims-template-config';
import path from 'path';
import style from './docs/siteIndexStyle';
import { homepage, name as repo } from './package.json';

const basePath = `/${repo}/`;
const isProd = process.env.NODE_ENV === 'production';

const themeConfig: SiteThemeConfig = {
  name: repo,
  github: homepage,
  logo: isProd ? '/images/origin.png' : `/${repo}/images/origin.png`,
  hero: {
    'zh-CN': {
      description: 'Ant Design Style 文档站主题包',
      actions: [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
        {
          text: 'Github',
          link: 'https://github.com/eternallycyf/',
          openExternal: true,
        },
      ],
    },
    'en-US': {
      description: 'dumi2 theme similar to antd v5 website',
      actions: [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide-en',
        },
        {
          text: 'Config',
          link: '/config-en',
        },
      ],
    },
  },
  // 目前只能设置一个 自动设置apiHeader
  apiHeader: {
    sourceUrl: `https://github.com/eternallycyf/components/tree/master/packages/page-loading/src/{atomId}/index.tsx`,
    docUrl: `https://github.com/eternallycyf/components/tree/master/packages/page-loading/src/{atomId}/index.md`,
    pkg: '@ims-view/page-loading',
    match: ['/page-loading'],
  },
  footerConfig: {
    bottom: '2023',
    copyright: 'Made with ❤️ by eternallycyf - AFX & 数字科技',
    columns: footer(repo),
  },
};

export default defineConfig({
  title: repo,
  define: {
    'process.env': process.env,
  },
  base: isProd ? '/' : `/${repo}`,
  publicPath: isProd ? '/' : basePath,
  favicons: [isProd ? '/images/favicon.ico' : `/${repo}/images/favicon.ico`],
  alias: {
    '@ims-view/page-loading': path.join(__dirname, './packages/page-loading/src'),
    '@ims-view/page-loading/src': path.join(__dirname, './packages/page-loading/src/*'),
    '@ims-view/calendar': path.join(__dirname, './packages/calendar/src'),
    '@ims-view/calendar/src': path.join(__dirname, './packages/calendar/src/*'),
    '@ims-view/space': path.join(__dirname, './packages/space/src'),
    '@ims-view/space/src': path.join(__dirname, './packages/space/src/*'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'components', dir: './packages/page-loading/src' },
      { type: 'components', dir: './packages/calendar/src' },
      { type: 'components', dir: './packages/space/src' },
    ],
  },
  styles: [
    `html, body { background: transparent;  }
  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
    style,
  ],
  devtool: isProd ? false : 'source-map',
  clickToComponent: {},
  ignoreMomentLocale: true,
  targets: { chrome: 79 },
  codeSplitting: { jsStrategy: 'granularChunks' },
  themeConfig,
  ssr: isProd ? {} : false,
  hash: true,
  mock: {
    include: ['mock/**/*.{ts}'],
  },
  exportStatic: false,
  html2sketch: {},
  mfsu: {
    runtimePublicPath: true,
  },
});
