import { Col, Row, Table, Space, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
const ClientPage = () => {
  const [task, setTask] = useState([]);
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
          <Button type="primary">Editar</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("https://back-programacion-iii.vercel.app/api/task")
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar las tareas");
      });
  });

  return (
    <>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ width: "100%", height: "auto" }}>
          <Table columns={columns} dataSource={task} />
        </Col>
      </Row>
    </>
  );
};

export default ClientPage;
