import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import { AccountForm } from '.';

const AccountForm = ({type, setToken, setUser}) => {
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
 
  const title = type === 'login' ? "Login" : "Register";
  const oppositeTitle = type === 'login' ? "Register" : "Login";
  const oppositeType = type === 'login' ? "register" : "login";

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("userName", username)
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/${type}`, {
      method:'POST',
      headers:{"Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {username, password}})
  })

  const {data} = await response.json();
 
  const token = data?.token;
  localStorage.setItem("myToken", token)
  const myToken = localStorage.getItem('myToken')
  console.log(myToken)
 
  if(token){
  setToken(token);
  const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`, 
    },

  }) 
  const {data} = await response.json();
  console.log('data' , data);
  setUser(data) 

  
  }
setUserName("");
setUserPassword("");
}
  
  return (<>
  <h2>{title}</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={(ev) => setUserName( ev.target.value )} placeholder="user name"></input>
    <input type="password" value={password} onChange={(ev) => setUserPassword( ev.target.value)} placeholder="password"></input>
    <button type="submit">{title}</button>
  </form>
  <Link to={`${oppositeType}`}>{oppositeTitle}</Link>

  </> )
}

export default AccountForm;




