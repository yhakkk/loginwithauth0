import React from 'react';
import { Form, Input, Button } from 'antd';

const CreateTask = ({ onCreate }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Envía los valores del formulario al callback onCreate
    if (onCreate) {
      onCreate(values);
    }
    // Resetea el formulario después de crear la tarea
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
      
      }}
    >
      <Form.Item
        label="Title"
        name="name"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder="Enter task title" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea placeholder="Enter task description" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
