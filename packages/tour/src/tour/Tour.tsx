import { Button, Popover } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TourProps } from './interface';
import { Mask } from './Mask';

const Tour: FC<TourProps> = (props) => {
  const { step = 0, open: defaultOpen, steps = [], onStepsEnd, getContainer } = props;

  const [visible, setVisible] = React.useState(defaultOpen ?? true);
  const open = defaultOpen == undefined ? visible : defaultOpen;
  const [currentStep, setCurrentStep] = useState<number>(0);

  const currentSelectedElement = steps[currentStep]?.selector();

  const currentContainerElement = getContainer?.() || document.documentElement;

  const [done, setDone] = useState(false);

  const [isMaskMoving, setIsMaskMoving] = useState<boolean>(false);

  const getCurrentStep = () => {
    return steps[currentStep];
  };

  const back = async () => {
    if (currentStep === 0) {
      return;
    }

    const { beforeBack } = getCurrentStep();
    await beforeBack?.(currentStep);
    setCurrentStep(currentStep - 1);
  };

  const forward = async () => {
    if (currentStep === steps.length - 1) {
      await onStepsEnd?.();
      setDone(false);
      setCurrentStep(0);
      defaultOpen == undefined && setVisible(false);
      return;
    }

    const { beforeForward } = getCurrentStep();
    await beforeForward?.(currentStep);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    setCurrentStep(step!);
  }, [step]);

  const renderPopover = (wrapper: React.ReactNode) => {
    const config = getCurrentStep();

    if (!config) {
      return wrapper;
    }

    const { renderContent } = config;
    const content = renderContent ? renderContent(currentStep) : null;

    const operation = (
      <div className={'tour-operation'}>
        {currentStep !== 0 && (
          <Button className={'back'} onClick={() => back()}>
            {'上一步'}
          </Button>
        )}
        <Button className={'forward'} type={'primary'} onClick={() => forward()}>
          {currentStep === steps.length - 1 ? '我知道了' : '下一步'}
        </Button>
      </div>
    );

    return isMaskMoving ? (
      wrapper
    ) : (
      <Popover
        content={
          <div>
            {content}
            {operation}
          </div>
        }
        open={true}
        placement={getCurrentStep()?.placement}
      >
        {wrapper}
      </Popover>
    );
  };

  const [, setRenderTick] = useState<number>(0);

  useEffect(() => {
    setRenderTick(1);
  }, []);

  if (!currentSelectedElement || done) {
    return null;
  }

  const mask = (
    <Mask
      onAnimationStart={() => {
        setIsMaskMoving(true);
      }}
      onAnimationEnd={() => {
        setIsMaskMoving(false);
      }}
      container={currentContainerElement}
      element={currentSelectedElement}
      renderMaskContent={(wrapper) => renderPopover(wrapper)}
    />
  );

  return open ? createPortal(mask, currentContainerElement) : null;
};

export default Tour;
