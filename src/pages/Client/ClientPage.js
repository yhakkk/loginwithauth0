import { Col, Row, Table, Space, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocale } from "antd/es/locale";

const ClientPage = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()
  const columns = [
    {
      title: "Titulo",
      dataIndex: "name",
      key: "nombre",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Acciones",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => navigate(`/client/${record._id}/edit`)}
          >
            Editar
          </Button>
          <Button variant="outlined" color="danger" onClick={() => 
            handleDelete(record._id)} >
            Borrar
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://back-programacion-iii.vercel.app/api/task/${id}`
      );
      setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error al borrar las tareas", error);
    }

  };


  
  const handleOk = () => {
    navigate("./crear");
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://back-programacion-iii.vercel.app/api/task");
      setTask(response.data);
      console.log(response)
    } catch (error) {
      console.error("Error al cargar las tareas", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);



  return (
    <>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ width: "100%", height: "auto" }}>
          <Button onClick={handleOk}>Crear Task</Button>
          <Table columns={columns} dataSource={task} />
        </Col>
      </Row>
    </>
  );
};

export default ClientPage;
