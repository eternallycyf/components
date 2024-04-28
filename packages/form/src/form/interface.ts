import { CSSProperties, ReactElement, ReactNode } from 'react';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (errors: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  children?: ReactNode;
}

export interface FormInstance {
  getFieldsValue: () => Record<string, any>;
  setFieldsValue: (values: Record<string, any>) => void;
}

export interface ItemProps {
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  name?: string;
  valuePropName?: string;
  rules?: Array<Record<string, any>>;
  children?: ReactElement;
}

export interface FormContextProps {
  values?: Record<string, any>;
  onValueChange?: (key: string, value: any) => void;
  setValues?: (values: Record<string, any>) => void;
  validateRegister?: (name: string, cb: Function) => void;
}
