import React from "react";
import Navigation from "../ui/Navigation";
import NavigationItem from "../ui/NavigationItem";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import useToken from "../hooks/useToken";
import { useHistory } from 'react-router-dom';

function Navbar() {
  const { token } = useToken()
  const history = useHistory()

  return (
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      {token && (
        <NavigationItem>
          <Link to="/profile">Profile</Link>
        </NavigationItem>
      )}

      <NavigationItem>
        <Link to="/newsfeed">NewsFeed</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/currencyconverter">CurrencyConverter</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/both">Both apps</Link>
      </NavigationItem>
      {!token && (
        <NavigationItem>
          <Button onClick={() => {
            history.push('/login')
          }}>
            Login
          </Button>
        </NavigationItem>
      )}
      {token && (
        <NavigationItem>
          <Button onClick={() => {
            localStorage.removeItem('token')
            history.go(0)
          }}>
            Logout
          </Button>
        </NavigationItem>
      )}
    </Navigation>
  );
}

export default Navbar;
