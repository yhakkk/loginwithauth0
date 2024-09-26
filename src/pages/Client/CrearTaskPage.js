import { useNavigate } from "react-router-dom";
import CreateTask from "../../components/CreateTask";
import axios from "axios";

const CrearTaskPage = () =>{
  const navigate = useNavigate()

    const handleCreate = async (values) => {
        const { name, description } = values;
        try {
          const response = await axios.post('https://back-programacion-iii.vercel.app/api/task', { name, description });
          console.log("Tarea Registrada", response.data);
          navigate("/client")
        } catch (error) {
          console.error("Error al registrar la tarea:", error);
        }
      };
      
    return(
        <>
        
        <CreateTask
        onCreate={handleCreate}/>
        
        </>
    );


}

export default CrearTaskPage;