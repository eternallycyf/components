import classNames from 'classnames';
import React, { Fragment } from 'react';
import { ConfigContext } from './ConfigProvider';
import { spaceSize } from './constant';
import './index.less';
import { SizeType, SpaceProps } from './interface';

function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: React.FC<SpaceProps> = (props) => {
  const { space } = React.useContext(ConfigContext);

  const {
    className,
    style,
    children,
    size = space?.size || 'small',
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const childNodes = React.Children.toArray(children);

  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
  const cn = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
    },
    className,
  );

  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || i || `space-item-${i}`;

    return (
      <Fragment key={key}>
        <div className="space-item">{child}</div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </Fragment>
    );
  });

  const otherStyles: React.CSSProperties = {};

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map((item) =>
        getNumberSize(item),
      ),
    [size],
  );

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;

  if (wrap) {
    otherStyles.flexWrap = 'wrap';
  }

  return (
    <div
      className={cn}
      style={{
        ...otherStyles,
        ...style,
      }}
      {...otherProps}
    >
      {nodes}
    </div>
  );
};

export default Space;
