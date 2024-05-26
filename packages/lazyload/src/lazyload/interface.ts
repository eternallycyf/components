import { CSSProperties, ReactNode } from 'react';

export interface LazyloadProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: ReactNode;
  offset?: string | number;
  width?: number | string;
  height?: string | number;
  onContentVisible?: () => void;
  children: ReactNode;
}
