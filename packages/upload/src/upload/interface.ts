import { CSSProperties, PropsWithChildren } from 'react';

export interface UploadProps extends PropsWithChildren {
  action: string;
  headers?: Record<string, any>;
  name?: string;
  data?: Record<string, any>;
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  drag?: boolean;
}

export interface DraggerProps extends PropsWithChildren {
  onFile: (files: FileList) => void;
}

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: 'ready' | 'uploading' | 'success' | 'error';
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}
