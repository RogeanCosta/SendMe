import React, { Fragment, Component } from "react";
import './RecuperarSenha.css'
import firebase from "../../config/firebase"
import handleInputChange from "../../utils/handleInputChange";

class RecuperarSenha extends Component {

constructor() {
    super();
    this.handleChange = handleInputChange.bind(this);
    this.auth = firebase.auth()
  }

  state = {
    email: ""
  };



handleSubmit = e => {
  e.preventDefault();
  this.auth
    .sendPasswordResetEmail(this.state.email.trim())
    .then(() => {
      alert('Email enviado com sucesso!');
      this.props.history.push('/login');
    })
    .catch(function(error) {
      alert('Usuário incorreto!');
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
                <h5 className="card-title text-center">Recuperar Senha</h5>
                <form className="form-signin"  >
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
                        <label htmlFor="inputEmail">Email </label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        </div>

                        <button onClick={this.handleSubmit}
                        id="buttonRecuperarSenha"
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit" 
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
}
}

export default RecuperarSenha;