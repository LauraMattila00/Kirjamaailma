import {useEffect, useState} from 'react';
import axios from 'axios';



const URL="http://localhost/kirjamaailma/"

  
  export default function LoginApp(URL){
    const[loggedUser, setLoggedUser]=useState(null);
   
  
    useEffect(()=>{
      axios.post(URL+"login.php", {}, {withCredentials:true})
        .then(resp => setLoggedUser(resp.data))
        .catch(e => console.log(e.message));
    }, [])
    return (
      <div>
         {loggedUser ? <h1>Olet kirjautunut</h1>: <Login setLoggedUser= {setLoggedUser}/>}
      </div>
    )
  }
  
    function Login({setLoggedUser}){
      const [username, setUsername]= useState("");
      const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
  
  
      function logIn(){
        const formData = new FormData();

        formData.append=("username", username);
        formData.append=("email", email);
        formData.append=("password", password);
       
  
        axios.post(URL+"login.php", formData, {withCredentials:true})
          .then(resp => setLoggedUser(resp.data))
          .catch(e=>console.log(e.message));
      }
    
      return(
        <form>
          <label>Username:</label>
          <input type="text"defaultValue={username} OnChange={e=>setUsername(e.target.value)}/><br></br>
          <label>Email:</label>
          <input type="email" defaultValue={email} OnChange={e=>setEmail(e.target.value)}/><br></br>
          <label>Password:</label>
          <input type="password" defaultValue={password} OnChange={e=>setPassword(e.target.value)}/><br></br>
          <button type="button" onClick={logIn}>Login</button>
        </form>
      )}