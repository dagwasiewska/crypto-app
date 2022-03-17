import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import Logged from "./pages/Logged";

function App() {

  const { setToken } = useToken()

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/newsfeed">
            <SecondPage />
          </Route>
          <Route exact path="/profile">
            <Logged />
          </Route>
          <Route exact path="/currencyconverter">
            <ThirdPage />
          </Route>
          <Route exact path="/both">
            <FourthPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login setToken={setToken} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
