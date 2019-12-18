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

export default class Produtos extends Component {
  constructor() {
    super();
    this.db = firebase.database();
    this.auth = firebase.auth();
  }

  state = {
    produtos: [],
    favoritos: [],
    carrinho: [],
    currentUser: null
  }

  componentDidMount() {
    if (this.props.location && this.props.location.query) {
      if (this.props.location.query.userId) {
        this.db.ref('usuarios').orderByChild("_uid").equalTo(this.props.location.query.userId).on("value", snapshot => {
          const [usuarioId, userData] = Object.entries(snapshot.val())[0];
          const currentUser = { ...userData, _id: usuarioId };
          let favoritos = null;
          let carrinho = null;

          if (currentUser.favoritos) {
            favoritos = Object.entries(currentUser.favoritos).map(([key, value]) => ({ ...value, _id: key }))
          }

          if (currentUser.carrinho) {
            carrinho = Object.entries(currentUser.carrinho).map(([key, value]) => ({ ...value, _id: key }))
          }

          this.setState({ currentUser, favoritos: favoritos || [], carrinho: carrinho || [] });
        });
      }
    }

    this.db.ref('produtos').on("value", snapshot => {
      let produtos = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key, quantidade: 0 }))

      if (this.props.location.query) {
        const { categoria, lojaId } = this.props.location.query;
        if (categoria) {
          produtos = produtos.filter(produto => produto.tipo === categoria);
        }
        if (lojaId) {
          produtos = produtos.filter(produto => produto.loja === lojaId);
        }
      }

      this.setState({ produtos })
    });
  }

  aumentarQtdProduto = produtoId => {
    this.setState(prevState => {
      let produtos = [...prevState.produtos];
      const index = produtos.findIndex(produto => produto._id === produtoId);

      let produto = { ...produtos[index] };

      produto.quantidade += 1;

      produtos[index] = produto;

      return { produtos }
    });
  }

  mudarQtdProduto = (produtoId, novoValor) => {
    this.setState(prevState => {
      let produtos = [...prevState.produtos];
      const index = produtos.findIndex(el => el._id === produtoId);

      let { quantidade } = produtos[index];
      if (novoValor === '') {
        quantidade = 0;
      } else {
        const parsed = parseInt(novoValor);
        if (!isNaN(parsed)) {
          quantidade = parsed;
        }
      }

      produtos[index] = { ...produtos[index], quantidade };

      return { produtos }
    });
  };

  diminuirQtdProduto = produtoId => {
    this.setState(prevState => {
      let produtos = [...prevState.produtos];
      const index = produtos.findIndex(produto => produto._id === produtoId);

      if (produtos[index].quantidade === 0) {
        return { produtos };
      }

      let produto = { ...produtos[index] };

      produto.quantidade -= 1;

      produtos[index] = produto;

      return { produtos };
    });
  };

  adicionarFavorito = produto => {
    if (this.state.currentUser) {
      const ref = this.db.ref(`usuarios/${this.state.currentUser._id}/favoritos`).push();
      ref.set({ produtoId: produto._id });
    }
  }

  removerFavorito = produto => {
    if (this.state.currentUser) {
      const index = this.state.favoritos.findIndex(el => el.produtoId === produto._id)
      const ref = this.db.ref(`usuarios/${this.state.currentUser._id}/favoritos`);
      ref.child(this.state.favoritos[index]._id).remove();
    }
  }

  adicionarProdutoCarrinho = produto => {
    if (this.state.currentUser) {
      if (!produto.quantidade) {
        return alert('Informe a quantidade do produto que deseja adicionar ao carrinho!');
      }

      const item = this.state.carrinho.find(el => el.produtoId === produto._id);
      if (item) {
        const ref = this.db.ref(`usuarios/${this.state.currentUser._id}/carrinho/${item._id}`);
        ref.update({ quantidade: item.quantidade + produto.quantidade }, () => {
          alert('Produto adicionado ao carrinho!');
        });
      } else {
        const ref = this.db.ref(`usuarios/${this.state.currentUser._id}/carrinho`).push();
        ref.set({ produtoId: produto._id, quantidade: produto.quantidade }, () => {
          alert('Produto adicionado ao carrinho!');
        });
      }
    }
  }

  renderIconeFavoritos = produto => {
    const index = this.state.favoritos.findIndex(el => el.produtoId === produto._id);
    if (index !== -1) {
      return <i className="icon-heart" onClick={() => this.removerFavorito(produto)} />
    }

    return <i className="icon-heart-empty" onClick={() => this.adicionarFavorito(produto)} />
  }

  renderProdutos = () => {
    if (!this.state.produtos.length) {
      return (
        <div style={{ marginTop: '10px' }}>
          <Row>
            <Col sm="10" className="offset-sm-1">
              <Alert variant='warning'>
                Nenhum produto para esta categoria!
          </Alert>
            </Col>
          </Row>
        </div>
      )
    }

    const decks = chunk(this.state.produtos, 3);

    return decks.map(deck => (
      <div>
        <Row>
          <CardDeck>
            {deck.map(produto => (
              <Col sm="4">
                <Card>
                  <Card.Img variant="top" src={produto.imagem} />
                  <Card.Body>
                    <Card.Title>{produto.nome}<br /></Card.Title>
                    <Card.Text>
                      R$ {produto.preco}
                    </Card.Text>
                    <div id="Quantidade">
                      <i className="icon-minus-sign" onClick={() => this.diminuirQtdProduto(produto._id)} />
                      <input type="text" id="Quantity" value={produto.quantidade} onChange={event => this.mudarQtdProduto(produto._id, event.target.value)} />
                      <i className="icon-plus-sign" onClick={() => this.aumentarQtdProduto(produto._id)} />
                    </div>
                    <br />
                    {this.renderIconeFavoritos(produto)}
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="success" type="button" onClick={() => this.adicionarProdutoCarrinho(produto)}>
                      <i className="icon-shopping-cart" /> Adicionar ao Carrinho
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </CardDeck>
        </Row>
      </div>
    ));
  }


  render() {
    return (
      <div>
        <div id="Apresentacao">
          <h1>Supermercado São Luiz - Categoria: Mercearia</h1>
        </div>
        {this.renderProdutos()}
      </div>
    );
  }
}