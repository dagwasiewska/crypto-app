import React from "react";
import Navigation from "../ui/Navigation";
import NavigationItem from "../ui/NavigationItem";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/currencyconverter">CurrencyConverter</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/newsfeed">NewsFeed</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/both">Both apps</Link>
      </NavigationItem>

      <NavigationItem>
        <Link to="/newsfeed"> Checking </Link>
      </NavigationItem>
    </Navigation>
  );
}

export default Navbar;
