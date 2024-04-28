import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Upload, UploadProps } from '@ims-view/upload';
import { Button } from 'antd';
import React from 'react';

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:3333/upload',
  beforeUpload(file) {
    if (file.name.includes('1.image')) {
      return false;
    }
    return true;
  },
  onSuccess(ret) {
    console.log('onSuccess', ret);
  },
  onError(err) {
    console.log('onError', err);
  },
  onProgress(percentage, file) {
    console.log('onProgress', percentage);
  },
  onChange(file) {
    console.log('onChange', file);
  },
};

const App: React.FC = () => (
  <>
    <div>
      <Upload {...props} drag>
        {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
        <p>
          <InboxOutlined style={{ fontSize: '50px', color: '#2b5fdc' }} />
        </p>
        <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>点击或者拖拽文件到此处</p>
      </Upload>
    </div>

    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  </>
);

export default App;
