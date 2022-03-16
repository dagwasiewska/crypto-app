import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log(token)
    setToken(token);
    window.location.reload();
  }

  return (
    <div className="login-wrapper flex flex-col items-center bg-indigo-600 w-full px-10 py-20 mt-20 my-20">
      <h1 className="text-white text-center text-xl py-5">Please log in </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="text-white text-center">Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className="text-white text-center">Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button className="text-black bg-white items-center mx-10 my-5 px-5 py-5" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;
