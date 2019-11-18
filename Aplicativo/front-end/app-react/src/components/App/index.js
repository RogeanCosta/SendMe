import React from "react";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "../tela-cadastro"
import Produtos from "../Produtos";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/produtos" component={Produtos}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
