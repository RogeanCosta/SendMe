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

  state ={
    currentUser : null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.db.ref('usuarios').orderByChild("_uid").equalTo(nextProps.currentUser.uid).on("value", snapshot => {
        const [userId, userData] = Object.entries(snapshot.val())[0];
        const currentUser = { ...userData, _id: userId };
        if (currentUser) {
          if (currentUser.carrinho) {
            const carrinho = Object.values(currentUser.carrinho).map(carrinho => carrinho.produtoId);
            this.setState({ currentUser, carrinho });
          } else {
            this.setState({ currentUser });
          }
        }
      });
    }
  }

  ref = this.db.ref(`usuarios/${this.state.currentUser._id}/carrinho`)

  renderCarrinho() {
    var number = 1
    const decks = chunk(this.ref, 30);
    return decks.map(deck => (
      <Table striped bordered hover variant="dark" id="basket">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Excluir Item</th>
          </tr>
        </thead>
        {deck.map(ref => (<tr>
          <th>{number++}</th>
          <th>{ref.nome}</th>
          <th>1</th>
          <th>{ref.preco}</th>
          <th><Button variant="danger" id="rm">Remover do Carrinho</Button></th>
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