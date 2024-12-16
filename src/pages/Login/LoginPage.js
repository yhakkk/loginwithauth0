import LoginButton from "../../components/login"

const LoginPage = () =>{

    const handleLogin=()=>{
        console.log('login')
    }
    
    return(
        <>
        <LoginButton />
        <h2>LOGIN</h2>
        </>
    )
}



export default LoginPage