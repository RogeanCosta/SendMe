import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import categorias from './Categorias.js'
import './inicial.css'
import { Link } from 'react-router-dom'
import chunk from "../../utils/chunk"

export default class Produtos extends Component{
  renderCategorias = () => {
    const decks = chunk(categorias, 5);
    
    return decks.map(deck => (
      <div>
        <CardDeck className="CardDeck">
          {deck.map(categoria => (
            <Card className="cartao" key={categoria.tipo}>
              <Card.Body>
                <Link to={{ pathname: '/produtos', query: { categoria: categoria.tipo } }}><Card.Title>{categoria.nome}<br/></Card.Title></Link>
              </Card.Body>
              <Link to={{ pathname: '/produtos', query: { categoria: categoria.tipo } }}><Card.Img className="imagem" src={categoria.imagem}/></Link>            
            </Card>
          ))}
        </CardDeck>
      </div>
    ));
  }

    render(){
        return(
        <div>
          <div id="Apresentacao">
            <h1>Selecione a categoria</h1>
          </div>
          {this.renderCategorias()}
        </div>
        );
    }
}