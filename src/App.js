import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';

function App() {
  const {isAuthenticated } = useAuth0();

    console.log('isAuthenticated:', isAuthenticated); 

  return (
    <>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
          
        </>
      ) : (
        <>
        <LoginButton />
         </>
        
      )}
    </>
  );
}

export default App;
