import { FC, forwardRef, useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useStore from './useStore';

import { createPortal } from 'react-dom';
import './index.less';
import { MessageProps, MessageRef, Position } from './interface';
import { useTimer } from './useTimer';

const MessageItem: FC<MessageProps> = (item) => {
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.onClose!,
  });

  return (
    <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.content}
    </div>
  );
};

export const MessageProvider = forwardRef<MessageRef, {}>((props, ref) => {
  const { messageList, add, update, remove, clearAll } = useStore('top');

  if ('current' in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    };
  }
  // useImperativeHandle(ref, () => {
  //     return {
  //         add,
  //         update,
  //         remove,
  //         clearAll
  //     }
  // }, [])

  const positions = Object.keys(messageList) as Position[];

  const messageWrapper = (
    <div className="message-wrapper">
      {positions.map((direction) => {
        return (
          <div className={`message-wrapper-${direction}`} key={direction}>
            <TransitionGroup>
              {messageList[direction].map((item) => {
                return (
                  <CSSTransition key={item.id} timeout={1000} classNames="message">
                    <MessageItem onClose={remove} {...item}></MessageItem>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
        );
      })}
    </div>
  );

  const el = useMemo(() => {
    const el = document.createElement('div');
    el.className = `wrapper`;

    document.body.appendChild(el);
    return el;
  }, []);

  return createPortal(messageWrapper, el);
});
