import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import useToken from "./hooks/useToken.js";
import Logged from "./pages/Logged";
import IconProvider from "./providers/IconProvider";
import OsDetectionProvider from "./providers/OsDetectionProvider";

function App() {

  const { setToken } = useToken()

  return (
    <OsDetectionProvider>
      <IconProvider>
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
      </IconProvider>
    </OsDetectionProvider>
  );
}

export default App;
