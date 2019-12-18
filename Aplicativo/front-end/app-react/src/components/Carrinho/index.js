import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import firebase from "../../config/firebase"
import Table from 'react-bootstrap/Table'
import { withRouter } from "react-router-dom";

import './index.css'

class Carrinho extends Component {
  constructor() {
    super();
    this.db = firebase.database();
  }

  state = {
    idUsuario: null,
    carrinho: []
  }

  componentDidMount() {
    const { userId } = this.props.location.state;
    this.db.ref('usuarios').orderByChild("_uid").equalTo(userId).on("value", snapshot => {
      const [idUsuario, userData] = Object.entries(snapshot.val())[0];

      let carrinho = [];
      if (userData.carrinho) {
        carrinho = Object.entries(userData.carrinho).map(([key, value]) => ({ ...value, _id: key }));
      }

      if (carrinho.length) {
        this.db.ref('produtos').on("value", snapshot => {
          let todosProdutos = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key }));
          const produtosCarrinho = carrinho.map(el => {
            const produto = todosProdutos.find(p => p._id === el.produtoId);
            return { ...produto, quantidade: el.quantidade, _idCarrinho: el._id }
          });

          this.setState({ carrinho: produtosCarrinho, idUsuario })
        });
      };
    });
  }

  handleRemoverProduto = produto => {
    const ref = this.db.ref(`usuarios/${this.state.idUsuario}/carrinho`);
    ref.child(produto._idCarrinho).remove(() => {
      this.setState(prevState => ({
        carrinho: prevState.carrinho.filter(el => el._idCarrinho !== produto._idCarrinho)
      }));
      alert('Item removido do carrinho!');
    });
  }

  renderProdutos = () => {
    var number = 1;
    if (!this.state.carrinho.length) {
      return (
        <tr>
          <th colSpan={5}>Nenhum produto no carrinho.</th>
        </tr>
      )
    }

    const produtos = this.state.carrinho.map(produto => (
      <tr>
        <th>{number++}</th>
        <th>{produto.nome}</th>
        <th>{produto.quantidade}</th>
        <th>{produto.preco}</th>
        <th><Button variant="danger" id="rm" onClick={() => this.handleRemoverProduto(produto)}>Remover do Carrinho</Button></th>
      </tr>
    ));

    return produtos;
  }

  renderCarrinho() {
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
        {this.renderProdutos()}
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
          <Button id="volta" variant="danger" onClick={() => this.props.history.push('/inicial')}>Voltar as Compras</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Carrinho);
