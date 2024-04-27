type BaseIconProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: string | string[];
  spin?: boolean;
};

export type IconProps = BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>;

export interface CreateIconOptions {
  content: React.ReactNode;
  iconProps?: IconProps;
  viewBox?: string;
}
