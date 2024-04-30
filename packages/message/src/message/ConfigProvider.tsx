import { createContext, PropsWithChildren, useRef } from 'react';
import { ConfigProviderProps, MessageRef } from './interface';
import { MessageProvider } from './Message';

export const ConfigContext = createContext<ConfigProviderProps>({});

export function ConfigProvider(props: PropsWithChildren) {
  const { children } = props;

  const messageRef = useRef<MessageRef>(null);

  return (
    <ConfigContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  );
}
