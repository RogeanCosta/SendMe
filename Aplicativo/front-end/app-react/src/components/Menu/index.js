import Navbar from 'react-bootstrap/Navbar'
import React from "react";
import { Button, Nav, Form, FormControl } from 'react-bootstrap'

export default () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SendMe</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>

    <div className="jumbotron vertical-center" id="form">
      <div class="panel-body">
        <Form.Control type="text" id="CampoPesquisar" placeholder="Pesquisar" />

      </div>
    </div >
    <div className="jumbotron vertical-center" id="but">
    <Button id="botaoPesquisar" variant="outline-info">Pesquisar</Button>
    </div >
  </Navbar >

);