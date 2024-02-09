import { createContext } from 'react';

export interface LocaleContextType {
  locale: 'zh-CN' | 'en-US';
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'zh-CN' as const,
});

export default LocaleContext;
