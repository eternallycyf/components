import cs from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';
import './index.less';
import { IconProps } from './interface';
import { getSize } from './utils';

const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
  const { style, className, spin, size = '1em', children, ...rest } = props;

  const [width, height] = getSize(size);

  const cn = cs(
    'icon',
    {
      'icon-spin': spin,
    },
    className,
  );

  return (
    <svg
      ref={ref}
      className={cn}
      width={width}
      height={height}
      style={style}
      fill="currentColor"
      {...rest}
    >
      {children}
    </svg>
  );
});

export default Icon;
