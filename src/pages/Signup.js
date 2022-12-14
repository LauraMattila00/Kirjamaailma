import React, { useState, useEffect } from 'react'

import axios from 'axios';


export default function Register({setUser}){
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const[password, setPassword]=useState("");


  function register(e){
    const json ={username, email, password}; // same as {uname:unmae, pw:pw}

    // sending form data to server register withcred.. is 
    //sucessful response set


  axios.post(URL+"register.php", json, {withCredentials:true})
  .then(resp=> setUser(username)
  .catch(e=> console.log(e.message)))
  }
  return(
    <form>
      <label>Username:</label>
      <input type="text"defaultValue={username}OnChange={e=>setUsername(e.target.value)}/><br/>
      <label>Email:</label>
      <input type="email" defaultValue={email}OnChange={e=>setEmail(e.target.value)}/>
      <label>Password:</label>
      <input type="password" defaultValue={password}OnChange={e=>setPassword(e.target.value)}/>
      <button type="button" onClick={register}>Register</button>
    </form>
  )}


















/*import { useEffect, useState } from "react";

export const Actions = () => {
  let [users, setUsers] = useState([]);

    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);

  useEffect(() => {
    fetch("http://localhost/register/register.php") // server data file directory
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers(data.users.reverse());
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return {
    users
   
  };
};*/



/*import { useState } from "react";


  
function App() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
  
    return (
        <div className="App">
            <form
                action="http://localhost:3000/register.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}
  
export default App;





*/







/*import React from 'react'
import axios from 'axios';
import Register from '../components/register';


export default function Signup() {
  return (
    <div>Signup</div>
  )
}*/







        