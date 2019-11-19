import React, { Component } from "react";
import firebase from "firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import firebaseConfig from "./../../config/firebaseConfig";
import Cadastro from "../tela-cadastro";
import Produtos from "../Produtos";
import Help from "../Help";
import RecuperarSenha from "../RecuperarSenha";
import Inicial from "../Inicial";

class App extends Component {
  state = {
    user: null,
    auth: null
  };

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    this.setState({ auth: firebase.auth() }, () => {
      this.state.auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log("Usuário logou");
        } else {
          console.log("Usuário deslogou");
        }
      });
    });

    // this.auth.signOut();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route
              path="/login"
              render={() => <Login auth={this.state.auth} />}
            />
            <Route path="/recuperarsenha" component={RecuperarSenha} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/help" component={Help} />
            <Route path="/inicial" component={Inicial} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
