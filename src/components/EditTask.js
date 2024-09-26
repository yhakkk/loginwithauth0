import { Form, Input, Button,Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const EditTask = ({ onCreate, task }) =>{
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values) => {
        if (onCreate) {
          onCreate(values);
        
        }
    
        form.resetFields();
      };
    

      if (!task) {
        return <Spin />; 
    }

    return(
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
      initialValues={task}
      
    >
      <Form.Item
        label="Titulo"
        name="name"
        value={task.name}
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
        value={task.description}
        style={{
          width:"300px"
        }}
        rules={[{ required: true, message: 'Ingrese texto!' }]}
      >
        <Input.TextArea placeholder="Ingrese Descripcion" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Editar Task
        </Button>
      </Form.Item>
    </Form>
    )
}


export default EditTask;