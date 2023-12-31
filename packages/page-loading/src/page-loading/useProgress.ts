import { insertCss } from 'insert-css';
import NProgress from 'multi-nprogress';
import { useEffect } from 'react';

const progressColor = (color) => `
#nprogress .bar {
  background: ${color};
}

#nprogress .peg {
  box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
}

#nprogress .spinner-icon {
  border-top-color: ${color};
  border-left-color: ${color};
}`;

interface Config {
  color: string;
  enable: boolean;
  loading: boolean;
  fullscreen: boolean;
}

export const useProgress = (container, config: Config) => {
  const { color, enable = true, loading = true, fullscreen } = config;

  // 控制 Progress 显示
  useEffect(() => {
    if (typeof loading === 'boolean' && !loading) return;

    // 如果传入 progress props 且为 false
    if (typeof enable === 'boolean' && !enable) return;

    const np = NProgress();

    np.configure({
      showSpinner: false,
      parent: `#${container}`,
    });

    np.start();
    np.inc();

    return () => {
      try {
        np.done();
        // eslint-disable-next-line no-empty
      } catch (e) {
        /* istanbul ignore next */
        np.remove();
      }
    };
  }, [container, enable, loading, fullscreen]);

  // 控制 progress 颜色
  useEffect(() => {
    insertCss(progressColor(color));
  }, [color]);
};
