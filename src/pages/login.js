import { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/pages.css'



export default


  function Login({ e }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [loggedUser, setLoggedUser] = useState("");

  /*  axios.get("http://localhost/kirjamaailma/"+"register/login.php", {withCredentials:true})
    .then(resp => {
      setLoggedUser(resp.data)
      console.log(resp.data)
    })
    .catch(e => console.log(e.message));*/

  function logIn() {
    const json = { username, email, password }; // same as {uname:unmae, pw:pw}

    /* const formData = new FormData();
   

     formData.append=("username", username);
     formData.append=("email", email);
     formData.append=("password", password);
     fetch("http://localhost/kirjamaailma/"+"register/login.php", { method: "POST", body: formData })}*/

    axios.post("http://localhost/kirjamaailma/" + "register/login.php", json, { headers: {}, })
      .then(resp => console.log(resp.data))
      .catch(e => console.log(e));
  }

  return (
    <form>
      <label>Username:</label>
      <input type="text" defaultValue={username} onChange={e => setUsername(e.target.value)} /><br></br>
      <label>Email:</label>
      <input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} /><br></br>
      <label>Password:</label>
      <input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} /><br>
      </br>
      <button type="button" onClick={logIn}>Login</button>
    </form>

  )
}

/*  function logout(){
    axios.get("http://localhost/kirjamaailma/"+"register/logout.php", {withCredentials:true})
    .then(resp => setLoggedUser(resp.data))
    .catch(e => console.log(e.message));
  
  
 
  return(
    <div>
      {loggedUser && <button type ="button" onClick={logout}>Logout</button>}
       {loggedUser ? <h1>hello</h1>: <Login setLoggedUser= {setLoggedUser}/>}
    </div>
  );*/

