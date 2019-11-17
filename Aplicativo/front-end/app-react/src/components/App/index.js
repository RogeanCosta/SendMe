import React from "react";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import Cadastro from "../Cadastro";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecuperarSenha from "../RecuperarSenha";
import TelaInicial from "../TelaInicial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/recuperarsenha" component={RecuperarSenha} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/telainicial" component={TelaInicial} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
