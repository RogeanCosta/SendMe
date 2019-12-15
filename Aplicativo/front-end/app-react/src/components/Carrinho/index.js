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
import Table from 'react-bootstrap/Table'

export default class Carrinho extends React.Component{
    handleClick() {
        this.setState({
          clicked: true
        });
      }







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
                  <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                        <td>{produto.nome}</td>
                      <td>{produto.preco}</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </CardDeck>
            </Row>
          </div>
        ));
      }
    









    render(){
        return(
            <div>
                <div id="Presentation">
                    <h1>Carrinho de Compras</h1>
                </div>
                    {this.renderProdutos()}
            </div>
        );
    }
}