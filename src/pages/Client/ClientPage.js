import { Col, Row, Table, Space, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientPage = () => {
  const [tasks, setTasks] = useState([]); // Tareas actuales
  const [totalTasks, setTotalTasks] = useState(0); // Total de tareas
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Titulo",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripción",
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
          <Button type="danger" onClick={() => handleDelete(record._id)}>
            Borrar
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetchTasks = async (page, limit) => {

      try {
        console.log("Esta es pagina", page);
        console.log("Este es el límite", limit);
        const response = await axios.get(
          `http://localhost:4000/api/task?page=${page}&limit=${limit}`
        );
        setTasks(response.data.data); 
        setTotalTasks(response.data.total); 
        console.log(response)
      } catch (error) {
        console.error("Error al cargar las tareas", error);
      }
    };
    fetchTasks(currentPage, pageSize);
    console.log("aaaaaaaaaaaaaaaaaaaaaa", currentPage);
  }, [currentPage]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://back-programacion-iii.vercel.app/api/task/${id}`
      );
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error al borrar la tarea", error);
    }
  };

  const handleOk = () => {
    navigate("/client/crear");
  };

  const handleTableChange = (pagination) => {

    console.log("bb",pagination)
    setCurrentPage(pagination); 

   
  };

  return (
    <>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ width: "100%", height: "auto" }}>
          <Button onClick={handleOk}>Crear Task</Button>
          <Table
            columns={columns}
            dataSource={tasks}
            rowKey={(record) => record._id}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: totalTasks,
              onChange: handleTableChange,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ClientPage;
