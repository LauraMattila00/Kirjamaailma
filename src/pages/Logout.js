/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



const URL = 'http://localhost/kirjamaailma/';

export default  
    
        function logout(){
          axios.get(URL+"logout.php", {withCredentials:true})
          .then(resp => setLoggedUser(resp.data))
          .catch(e => console.log(e.message));
        
        
      
        return(
          <div>
            {loggedUser && <button type ="button" onClick={logout}>Logout</button>}
             {loggedUser ? <h1>hello</h1>: <Login setLoggedUser= {setLoggedUser}/>}
          </div>
        );
        }
  


*/






















  
   /* const[loggedUser, setLoggedUser]=useState(null);

    useEffect(()=>{
      axios.post(URL+"register/login.php", {}, {withCredentials:true})
        .then(resp => setLoggedUser(resp.data))
        .catch(e => console.log(e.message));
    }, []);

    axios.get(URL+"register/logout.php", {withCredentials:true})
    .then(resp => setLoggedUser(resp.data))
    .catch(e => console.log(e.message));
  
  
  
  return(
    <div>
      {loggedUser && <button type ="button" onClick={logout}>Logout</button>}
       {loggedUser ? <h1>hello</h1>: <Login setLoggedUser= {setLoggedUser}/>}
    </div>
  )
  */