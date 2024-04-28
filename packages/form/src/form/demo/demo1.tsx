import { Form, FormInstance } from '@ims-view/form';
import { Button, Checkbox, Col, Input, Row, Space } from 'antd';
import { useEffect, useRef } from 'react';

const Basic: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const form = useRef<FormInstance>(null);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            console.log(form.current?.getFieldsValue());
          }}
        >
          打印表单值
        </Button>

        <Button
          type="primary"
          onClick={() => {
            form.current?.setFieldsValue({
              username: '测试名称',
            });
          }}
        >
          设置表单值
        </Button>
      </Space>

      <Form
        ref={form}
        initialValues={{ remember: true, username: '默认姓名' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: '请输入用户名!' },
                { max: 6, message: '长度不能大于 6' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <div>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Basic;
