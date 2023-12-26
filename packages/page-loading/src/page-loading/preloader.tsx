import type { CSSProperties, FC } from 'react';
import React from 'react';

import './preloader.less';

export interface SquareProps {
  /**
   * 主色(可选)
   * @default #1890ff
   */
  color?: string;
}

const Square: FC<SquareProps> = ({ color = '#1890ff' }) => {
  const colorStyle: CSSProperties = { background: color };

  return (
    <div className="component-preloader-square-container">
      <div className="component-preloader-square-item" style={colorStyle} />
      <div
        className="component-preloader-square-item component-preloader-square-animation-delay"
        style={colorStyle}
      />
      <div
        className="component-preloader-square-item component-preloader-square-animation-delay"
        style={colorStyle}
      />
      <div className="component-preloader-square-item" style={colorStyle} />
    </div>
  );
};

export default Square;
