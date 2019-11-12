import React from "react";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import Cadastro from "../Cadastro";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecuperarSenha from "../RecuperarSenha";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
<<<<<<< HEAD
          <Route path="/recuperarsenha" component={RecuperarSenha} />
=======
          <Route path="/cadastro" component={Cadastro} />
>>>>>>> master
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
