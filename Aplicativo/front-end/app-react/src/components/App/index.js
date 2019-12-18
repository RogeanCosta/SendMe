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
import firebase from "../../config/firebase"
import Menu from "../Menu";
import Carrinho from "../Carrinho"

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        return this.setState({ currentUser });
      }

      this.setState({ currentUser: null });
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {this.state.currentUser && <Menu user={this.state.currentUser} />}
          <Switch>
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/recuperarsenha" component={RecuperarSenha} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/produtos" render={props => <Produtos {...props} currentUser={this.state.currentUser} />} />
            <Route path="/help" component={Help} />
            <Route path="/avatar" component={Avatar} />
            <Route path="/loja" component={Loja} />
            <Route path="/inicial" component={TelaInicial} />
            <Route path="/dados" component={Dados} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
