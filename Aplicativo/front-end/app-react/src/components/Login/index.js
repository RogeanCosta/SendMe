import React, { Fragment } from "react";
import "./Login.css";

export default () => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputEmail">Email</label>
                </div>

                <div
                  className="form-label-group"
                  style={{ marginBottom: "0px" }}
                >
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Senha</label>
                </div>

                <div className="row">
                  <div class="col-md-12 text-center">
                    <button type="button" class="btn btn-link">
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
                  type="submit"
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
          <a class="btn btn-outline-light" href="#" role="button">
            Ajuda
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);
