import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './index.css'
import firebase from "../../config/firebase"
import chunk from "../../utils/chunk"
import Table from 'react-bootstrap/Table'

export default class Carrinho extends React.Component {
  constructor() {
    super();
    this.db = firebase.database()
  }

  state = {
    carrinho: []
  }

  componentDidMount() {
    this.db.ref('produtos').on("value", snapshot => {
      let carrinho = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key }));
      this.setState({ carrinho })
    });
  }


  renderCarrinho() {
    var number = 1
    const decks = chunk(this.state.carrinho, 30);
    return decks.map(deck => (
      <Table striped bordered hover variant="dark" id="basket">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        {deck.map(carrinho => (<tr>
          <th>{number++}</th>
          <th>{carrinho.nome}</th>
          <th>1</th>
          <th>{carrinho.preco}</th>
        </tr>))
        }

      </Table>
    ));
  }

  render() {
    return (
      <div className="u-release">
        <div id="presentation">
          <h1>Carrinho de Compras</h1>
        </div>
        {this.renderCarrinho()}
        <div id="lucros">
          <Button  id="dinheiro" variant="success">Ir para o Pagamento</Button>
          <Button id="volta" variant="danger">voltar as Compras</Button>
        </div>
      </div>
    );
  }
}