import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  FileOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Progress } from 'antd';
import React, { FC } from 'react';
import { UploadListProps } from './interface';

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="upload-list">
      {fileList.map((item) => {
        return (
          <li className={`upload-list-item upload-list-item-${item.status}`} key={item.uid}>
            <span className="file-name">
              {(item.status === 'uploading' || item.status === 'ready') && <LoadingOutlined />}
              {item.status === 'success' && <CheckOutlined />}
              {item.status === 'error' && <CloseOutlined />}
              {item.name}
            </span>
            <span className="file-actions">
              <DeleteOutlined
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === 'uploading' && <Progress percent={item.percent || 0} />}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
