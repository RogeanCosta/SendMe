import React from "react";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "../tela-cadastro"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
