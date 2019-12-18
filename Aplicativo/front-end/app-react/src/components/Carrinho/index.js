import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import firebase from "../../config/firebase"
import Table from 'react-bootstrap/Table'

import './index.css'

export default class Carrinho extends Component {
  constructor() {
    super();
    this.db = firebase.database();
  }

  state ={
    carrinho: []
  }

  componentDidMount() {
    const { user } = this.props.location.state;
    if (user.carrinho) {
      this.db.ref('produtos').on("value", snapshot => {
        let todosProdutos = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key }));
        const carrinho = user.carrinho.map(el => {
          const produto = todosProdutos.find(p => p._id === el.produtoId);
          return { ...produto, quantidade: el.quantidade }
        });

        this.setState({ carrinho })
      });
    };
  }

  renderCarrinho() {
    var number = 1
    return (<Table striped bordered hover variant="dark" id="basket">
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Excluir Item</th>
        </tr>
      </thead>
      <tbody>
        {this.state.carrinho.map(produto => (<tr>
          <th>{number++}</th>
          <th>{produto.nome}</th>
          <th>{produto.quantidade}</th>
          <th>{produto.preco}</th>
          <th><Button variant="danger" id="rm">Remover do Carrinho</Button></th>
        </tr>))
        }
      </tbody>
    </Table>
    );
  }

  render() {
    return (
      <div className="u-release">
        <div id="presentation">
          <h1>Carrinho de Compras</h1>
        </div>
        {this.renderCarrinho()}
        <div id="lucros">
          <Button id="dinheiro" variant="success">Ir para o Pagamento</Button>
          <Button id="volta" variant="danger">voltar as Compras</Button>
        </div>
      </div>
    );
  }
}
