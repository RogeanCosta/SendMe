import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import Cadastro from "../tela-cadastro";
import Produtos from "../Produtos";
import Help from "../Help";
import RecuperarSenha from "../RecuperarSenha";
import Avatar from "../Avatar";
import Loja from "../Loja";
import TelaInicial from "../TelaInicial";
import Dados from "../Dados";
import Menu from "../Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/recuperarsenha" component={RecuperarSenha} />
            <Route path="/cadastro" render={() =>
                  <div>
                    <Menu />
                    <Cadastro />
                  </div>
                } />
            <Route path="/produtos" render={() =>
                  <div>
                    <Menu />
                    <Produtos />
                  </div>
                } />/>
            <Route path="/help" render={() =>
                  <div>
                    <Menu />
                    <Help />
                  </div>
                } />/>
            <Route path="/avatar" render={() =>
                  <div>
                    <Menu />
                    <Avatar />
                  </div>
                } />/>
            <Route path="/loja" render={() =>
                  <div>
                    <Menu />
                    <Loja />
                  </div>
                } />/>
            <Route path="/inicial" render={() =>
                  <div>
                    <Menu />
                    <TelaInicial />
                  </div>
                } />/>
            <Route path="/dados" render={() =>
                  <div>
                    <Menu />
                    <Dados />
                  </div>
                } />/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
