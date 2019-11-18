import React, { Component } from "react";
import firebase from "firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../Login";
import Home from "../Home";
import firebaseConfig from "./../../config/firebaseConfig";

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
          // User is signed in.
          /* var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData; */
          // ...
          console.log("Usuário logou");
        } else {
          // User is signed out.
          // ...
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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
