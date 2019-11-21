import React, { Fragment } from "react";
import './RecuperarSenha.css'

export default () => (
    <Fragment>
        <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
                 <div className="card-body">
                <h5 className="card-title text-center">Recuperar Senha</h5>
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

                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        </div>

                        <button
                        id="buttonRecuperarSenha"
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        >
                        Solicitar recuperação de senha
                        
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </Fragment>

        );
