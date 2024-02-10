import { ConfigProvider, Space } from '@ims-view/space';
import { render } from '@testing-library/react';
import React from 'react';

describe('Space', () => {
  it('should render width empty children', () => {
    const { container } = render(<Space />);

    expect(container.children.length).toBe(1);
  });

  it('should render width ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider space={{ size: 'large' }}>
        <Space>
          <span>1</span>
          <span>2</span>
        </Space>
        <Space size="middle">
          <span>1</span>
          <span>2</span>
        </Space>
        <Space size="large">
          <span>1</span>
          <span>2</span>
        </Space>
      </ConfigProvider>,
    );

    expect(container.children).toMatchSnapshot();
  });
});
