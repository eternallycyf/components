import { Tour } from '@ims-view/tour';
import { Button, Flex } from 'antd';
import React from 'react';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <div>
        <Button onClick={() => setOpen(true)}>开启</Button>
      </div>
      <Flex gap="small" wrap="wrap" id="btn-group1">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>

      <div style={{ height: '200px' }}></div>

      <Flex wrap="wrap" gap="small">
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger id="btn-group2">
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </Flex>

      <div style={{ height: '200px' }}></div>

      <Flex wrap="wrap" gap="small">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
        <Button type="primary" danger ghost id="btn-group3">
          Danger
        </Button>
      </Flex>

      <Tour
        open={open}
        onStepsEnd={() => setOpen(false)}
        steps={[
          {
            selector: () => {
              return document.getElementById('btn-group1');
            },
            renderContent: () => {
              return '第一步';
            },
            placement: 'bottom',
          },
          {
            selector: () => {
              return document.getElementById('btn-group2');
            },
            renderContent: () => {
              return '第二步';
            },
            placement: 'bottom',
          },
          {
            selector: () => {
              return document.getElementById('btn-group3');
            },
            renderContent: () => {
              return '最后一步';
            },
            placement: 'bottom',
          },
        ]}
      />
    </div>
  );
}

export default App;
