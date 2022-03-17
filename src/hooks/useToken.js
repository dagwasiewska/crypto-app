import { useState } from 'react'

function useToken() {

  const getToken = () => {
    // sessionStorage <- only lives as long as the browser (Session) is open
    // localStorage <- lives even when the session is closed
    // const tokenString = sessionStorage.getItem('token');
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return userToken
  };

  const [token, setToken] = useState(getToken());


  const saveToken = userToken => {
    // sessionStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}

export default useToken