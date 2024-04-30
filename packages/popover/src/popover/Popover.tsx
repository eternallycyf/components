import {
  arrow,
  flip,
  FloatingArrow,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';
import { PopoverProps } from './interface';

export default function Popover(props: PopoverProps) {
  const {
    open,
    onOpenChange,
    content,
    children,
    trigger = 'hover',
    placement = 'bottom',
    className,
    style,
  } = props;

  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(open);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  });

  const hover = useHover(context, {
    enabled: trigger === 'hover',
  });

  const click = useClick(context, {
    enabled: trigger === 'click',
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, hover, dismiss]);

  const el = useMemo(() => {
    const el = document.createElement('div');
    el.className = `wrapper`;

    document.body.appendChild(el);
    return el;
  }, []);

  const floating = isOpen && (
    <div
      className="popover-floating"
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
    >
      {content}
      <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#fff" strokeWidth={1} />
    </div>
  );

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()} className={className} style={style}>
        {children}
      </span>
      {createPortal(floating, el)}
    </>
  );
}
