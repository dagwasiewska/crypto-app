import React from "react";
import { useState } from "react";


function Login() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="login-wrapper flex flex-col items-center bg-indigo-600 px-10 py-10">
      <h1 className="text-white text-center text-xl py-5">Please log in </h1>
      <form>
        <label>
          <p className="text-white text-center">Username</p>
          <input type="text" />
        </label>
        <label>
          <p className="text-white text-center">Password</p>
          <input type="password" />
        </label>
        <div>
          <button className="text-black bg-white items-center mx-10 my-5 px-5 py-5" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
