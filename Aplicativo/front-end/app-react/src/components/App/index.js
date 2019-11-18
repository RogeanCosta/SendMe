import React from "react";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import Cadastro from "../tela-cadastro"
import Produtos from "../Produtos";
import Help from "../Help";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecuperarSenha from "../RecuperarSenha";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/recuperarsenha" component={RecuperarSenha} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/produtos" component={Produtos}/>
          <Route path="/help" component={Help} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
