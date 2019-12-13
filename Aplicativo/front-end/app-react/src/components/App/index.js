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
import Carrinho from "../Carrinho";
import Pagamentos from "../Pagamentos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/recuperarsenha" component={RecuperarSenha} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/help" component={Help} />
            <Route path="/avatar" component={Avatar} />
            <Route path="/loja" component={Loja} />
            <Route path="/inicial" component={TelaInicial} />
            <Route path="/dados" component={Dados} />
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/pagamento" component={Pagamentos} /> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
