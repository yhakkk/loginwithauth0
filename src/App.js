import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import CreateTask from './components/CreateTask';
import axios from 'axios'
function App() {
  const {isAuthenticated } = useAuth0();

    console.log('isAuthenticated:', isAuthenticated); 

    const handleSubmit = async(values) =>{
      const { name, description } = values
      await axios.post('https://back-programacion-iii.vercel.app/api/task', {name,description})
      
      console.log('values:', values);
    }

  return (
  <>
  
  </>
  );
}

export default App;
