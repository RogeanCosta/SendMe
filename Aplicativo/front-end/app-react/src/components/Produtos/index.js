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
    favoritos: []
  }

  componentDidMount() {
    this.db.ref('produtos').on("value", snapshot => {
      let produtos = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key, quantidade: 0 }))

      if (this.props.location.query && this.props.location.query.categoria) {
        const categoria = this.props.location.query.categoria;
        if (categoria) {
          produtos = produtos.filter(produto => produto.tipo === categoria);
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

  renderIconeFavoritos = produto => {
    // if (true) {
    //   return <i className="icon-heart" />
    // }

    return <i className="icon-heart-empty" />
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
                    <Button variant="success"><i className="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
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