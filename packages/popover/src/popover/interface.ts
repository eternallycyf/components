import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export interface PopoverProps extends PropsWithChildren {
  content: ReactNode;
  trigger?: 'hover' | 'click';
  placement?: Side | AlignedPlacement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
}
