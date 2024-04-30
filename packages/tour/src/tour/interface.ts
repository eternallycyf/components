import { TooltipPlacement } from 'antd/es/tooltip';

export interface MaskProps {
  element: HTMLElement;
  container?: HTMLElement;
  renderMaskContent?: (wrapper: React.ReactNode) => React.ReactNode;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
}

export interface TourConfig {
  selector: () => HTMLElement | null;
  placement?: TooltipPlacement;
  renderContent?: (currentStep: number) => React.ReactNode;
  beforeForward?: (currentStep: number) => void;
  beforeBack?: (currentStep: number) => void;
}

export interface TourProps {
  open?: boolean;
  step?: number;
  steps: TourConfig[];
  getContainer?: () => HTMLElement;
  onStepsEnd?: () => void;
}
