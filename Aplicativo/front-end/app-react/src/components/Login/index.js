import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import handleInputChange from "../../utils/handleInputChange";
import firebase from "../../config/firebase";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.handleChange = handleInputChange.bind(this);
    this.auth = firebase.auth()
  }

  state = {
    email: "",
    senha: ""
  };

  componentDidMount() {
    this.auth.signOut();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.auth
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        alert('Usuário logado com sucesso!');
        this.props.history.push('/inicial');
      })
      .catch(function (error) {
        alert('Usuário e senha incorretos!');
        console.log(error.code, "-", error.message);
      });

    // this.auth.signOut();
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Login</h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                        onChange={this.handleChange}
                      />
                      <label htmlFor="inputEmail">Email</label>
                    </div>

                    <div
                      className="form-label-group"
                      style={{ marginBottom: "0px" }}
                    >
                      <input
                        name="senha"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={this.handleChange}
                      />
                      <label htmlFor="inputPassword">Senha</label>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-link" onClick={() => this.props.history.push('/recuperarsenha')}>
                          Esqueci minha senha
                        </button>
                      </div>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Entrar
                    </button>
                    <NavLink
                      type="button"
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      to="/cadastro"
                    >
                      Cadastrar
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <a className="btn btn-outline-light" href="/" role="button">
                Ajuda
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);