import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './index.css'
import firebase from "../../config/firebase"
import chunk from "../../utils/chunk"

export default class Produtos extends Component{
  constructor(){
    super();
    this.db = firebase.database()
  }
  
  state = {
    produtos: []
  }
  
  componentDidMount(){
    this.db.ref('produtos').on("value", snapshot => {
     
      let produtos = snapshot.val();

      if(this.props.location.query && this.props.location.query.categoria) {
        const categoria = this.props.location.query.categoria;
        if(categoria){
          produtos = snapshot.val().filter(produto => produto.tipo === categoria);
        }
      }

      this.setState({produtos})
    });
  }

  renderProdutos = () => {
    if (!this.state.produtos.length) {
      return (
        <div style={{marginTop: '10px'}}>
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
                <Card.Img variant="top" src={`/imagens/${produto.imagem}`}/>
                <Card.Body>
                  <Card.Title>{produto.nome}<br/></Card.Title>
                  <Card.Text>
                      R$ {produto.preco}
                  </Card.Text>
                  <div id="Quantidade">                
                  <i className="icon-minus-sign"></i>
                  <input type="tel" min="1" id="Quantity"></input>
                  <i className="icon-plus-sign"></i>
                  </div> 
                  <br/>
                  <i className="icon-heart-empty"></i>
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


    render(){
        return(
        <div>
          <div id="Apresentacao">
            <h1>Supermercado São Luiz - Categoria: Mercearia</h1>
          </div>
          {this.renderProdutos()}
        </div>
        );
    }
}