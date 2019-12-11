import Navbar from 'react-bootstrap/Navbar'
import React from "react";
import "./menu.css";
import { Button, Nav, Form, Dropdown } from 'react-bootstrap'

export default () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SendMe</Navbar.Brand>
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <div class="col-md-2 col-sm-4" id= "div1"><Form.Control type="text" id="CampoPesquisar" placeholder="Pesquisar" ></Form.Control>
      </div>

      <div class="col-md-2 col-sm-4" ><Button id="botaoPesquisar" variant="primary">Pesquisar
      <i className="icon-search" id="iconMenu"></i>
      </Button>

      </div>

      <div class="col-md-2 col-sm-4"><Button id="botaoCarrinho" variant="primary">Carrinho
      <i className="icon-shopping-cart" id="iconMenu"></i>
      </Button>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Usuário

  </Dropdown.Toggle>
        <Dropdown.Menu id="dropdown-basic">
          <Dropdown.Item href="#/action-1">atualizar cadastro</Dropdown.Item>
          <Dropdown.Item href="#/action-2">meus dados</Dropdown.Item>
          <Dropdown.Item href="#/action-3">meus pedidos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>



  </Navbar >
);