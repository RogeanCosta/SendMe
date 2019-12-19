import Navbar from 'react-bootstrap/Navbar'
import React from "react";
import "./menu.css";
import firebase from "../../config/firebase"
import { Button, Nav, Dropdown } from 'react-bootstrap'
import { Component } from "react";
import { withRouter } from "react-router-dom";

class Menu extends Component {
  constructor() {
    super();
    this.db = firebase.database();
  }

  handleClickCarrinho = () => {
    this.props.history.push({
      pathname: '/carrinho',
      state: {
        userId: this.props.user.uid
      }
    });
  }

  handleClickAtualizarCadastro = () => {
    this.props.history.push({
      pathname: '/cadastro',
      state: {
        userId: this.props.user.uid
      }
    });
  }

  handleClickSair = () => {
    this.props.history.push('/login');
  }

  handleClickHome = () => {
    this.props.history.push('/inicial');
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={this.handleClickHome}>SendMe</Navbar.Brand>
        <Nav >
          <Nav.Link onClick={this.handleClickHome}>Home</Nav.Link>
        </Nav>

        <div className="col-md-2 col-sm-4">
          <Button id="botaoCarrinho" variant="primary" onClick={this.handleClickCarrinho}>Carrinho
          <i className="icon-shopping-cart" id="iconMenu" />
          </Button>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Usuário
          </Dropdown.Toggle>
          <Dropdown.Menu id="dropdown-basic">
            <Dropdown.Item onClick={this.handleClickAtualizarCadastro}>Atualizar cadastro</Dropdown.Item>
            <Dropdown.Item onClick={this.handleClickSair}>Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar >
    );
  }
}

export default withRouter(Menu);