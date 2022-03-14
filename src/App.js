import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import Dashboard from "./pages/Dashboard";



function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
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
          <Route exact path="/currencyconverter">
            <ThirdPage />
          </Route>
          <Route exact path="/both">
            <FourthPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
