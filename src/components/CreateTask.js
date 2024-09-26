import React from 'react';
import { Form, Input, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateTask = ({ onCreate }) => {
  const [form] = Form.useForm();
  

  const onFinish = (values) => {
    if (onCreate) {
      onCreate(values);
    }

    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      }}
      
    >
      <Form.Item
        label="Titulo"
        name="name"
        style={{
          width:"300px"
        }}
        rules={[{ required: true, message: 'Ingrese texto' }]}
      >
        <Input placeholder="Ingrese Task" />
      </Form.Item>

      <Form.Item
        label="Descripcion"
        name="description"
        style={{
          width:"300px"
        }}
        rules={[{ required: true, message: 'Ingrese texto!' }]}
      >
        <Input.TextArea placeholder="Ingrese Descripcion" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Crear Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
