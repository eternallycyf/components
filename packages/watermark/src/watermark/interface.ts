import { CSSProperties } from 'react';

export type WatermarkOptions = Omit<WatermarkProps, 'className' | 'style' | 'children'>;

export interface WatermarkProps {
  style?: CSSProperties;
  className?: string;
  zIndex?: string | number;
  width?: number;
  height?: number;
  rotate?: number;
  image?: string;
  content?: string | string[];
  fontStyle?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
  };
  gap?: [number, number];
  offset?: [number, number];
  getContainer?: () => HTMLElement;
  children?: React.ReactNode;
}
