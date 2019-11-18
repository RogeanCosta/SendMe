import React, { Fragment, Component } from "react";
import "./Login.css";
import handleInputChange from "../../utils/handleInputChange";

class Login extends Component {
  constructor() {
    super();

    this.handleChange = handleInputChange.bind(this);
  }

  state = {
    email: "",
    senha: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.auth
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(console.log)
      .catch(function(error) {
        console.log(error.code, "-", error.message);
      });
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
                        <button type="button" className="btn btn-link">
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
                    <button
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      type="button"
                    >
                      Cadastrar
                    </button>
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

export default Login;
