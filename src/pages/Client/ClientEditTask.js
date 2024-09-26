import { useParams } from "react-router-dom";
import EditTask from "../../components/EditTask";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditTaskPage = () =>{

    const { id } = useParams();
    const [task, setTask] = useState(null);
    const navigate = useNavigate()

    const getTask = async ()  =>{

            try{
                const response = await axios.get(`https://back-programacion-iii.vercel.app/api/task/${id}`);
                console.log("Respuest",response.data)
                setTask(response.data);
              
            }
            catch(e){
                console.error("Error al obtener la tarea", e);
            }
    }

    const onFinish = (values) =>{
        const { name, description } = values;
        axios.put(`https://back-programacion-iii.vercel.app/api/task/${id}`, {name, description})
        navigate("/client");
    
    }

    useEffect(() =>{
        getTask();
    }, [id]);

    return(

        <EditTask 
        task={task}
        onCreate={onFinish}
        
        
        />

    );

}


export default EditTaskPage;