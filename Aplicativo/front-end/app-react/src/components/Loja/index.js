import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Category from './Categorias.js'
import './inicial.css'

export default class Produtos extends Component{
    render(){
        return(
        <div>
          <div id="Apresentacao">
            <h1>Selecione a categoria</h1>
          </div>
          <div>
            <CardDeck className="CardDeck">
            
            <Card className="cartao">
              <Card.Body>
                <Card.Title>{Category[0].nome}<br/></Card.Title>
              </Card.Body>
              <Card.Img className="imagem" src={Category[0].imagem}/>
             
            </Card>
            
            <Card className="cartao">             
              <Card.Body>
                <Card.Title>{Category[1].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[1].imagem}/>
            </Card>

            <Card className="cartao">
              <Card.Body>
              <Card.Title>{Category[2].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[2].imagem} />
            </Card>

            <Card className="cartao">
              <Card.Body>
                <Card.Title>{Category[3].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[3].imagem} />
            </Card>

            <Card className="cartao">             
              <Card.Body>
                <Card.Title>{Category[4].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[4].imagem}/>
            </Card>
          </CardDeck>
          </div>

          <div>
            <CardDeck className="CardDeck">
            
            <Card className="cartao">
              <Card.Body>
                <Card.Title>{Category[0].nome}<br/></Card.Title>
              </Card.Body>
              <Card.Img src={Category[0].imagem}/>
             
            </Card>
            
            <Card className="cartao">             
              <Card.Body>
                <Card.Title>{Category[1].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[1].imagem}/>
            </Card>

            <Card className="cartao">
              <Card.Body>
              <Card.Title>{Category[2].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[2].imagem} />
            </Card>

            <Card className="cartao">
              <Card.Body>
                <Card.Title>{Category[3].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[3].imagem} />
            </Card>

            <Card className="cartao">             
              <Card.Body>
                <Card.Title>{Category[4].nome}</Card.Title>
              </Card.Body>
              <Card.Img src={Category[4].imagem}/>
            </Card>
          </CardDeck>
          </div>

        </div>
        );
    }
}