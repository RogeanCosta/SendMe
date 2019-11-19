import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
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
            <CardDeck id="CardDeck">
            
            <Card className="card01">
              <Card.Body>
                <Card.Title>{Category[0].nome}<br/></Card.Title>
              </Card.Body>
              <Card.Img variant="top" src={Category[0].imagem}/>
             
            </Card>
            
            <Card>
              <Card.Img variant="top" src={Category[1].imagem}/>
              <Card.Body>
        <Card.Title>{Category[1].nome}</Card.Title>
                <Card.Text id="Preco">
                  R$ {Category[1].preco}
                </Card.Text>
                <div id="Quantidade">
                  <i class="icon-minus-sign"></i>
                  <input type="tel" min="1" id="Quantity"></input>
                  <i class="icon-plus-sign"></i>
                </div>
                <br/>
                <i class="icon-heart-empty"></i>
              </Card.Body>
              <Card.Footer>
                <Button variant="success"><i class="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={Category[2].imagem} />
              <Card.Body>
              <Card.Title>{Category[2].nome}</Card.Title>
                <Card.Text>
                  R$ {Category[2].preco}
                </Card.Text>
                <div id="Quantidade">
                  <i class="icon-minus-sign"></i>
                  <input type="tel" min="1" id="Quantity"></input>
                  <i class="icon-plus-sign"></i>
                </div>
                <br/>
                <i class="icon-heart-empty"></i>
              </Card.Body>
              <Card.Footer>
                <Button variant="success"><i class="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
              </Card.Footer>
            </Card>
          </CardDeck>
          </div>

          <div>
          <CardDeck id="CardDeck">
            <Card>
              <Card.Img variant="top" src={Category[3].imagem}/>
              <Card.Body>
                <Card.Title>{Category[3].nome}<br/></Card.Title>
                <Card.Text>
                     R$ {Category[3].preco}
                </Card.Text>
                <div id="Quantidade">
                <i class="icon-minus-sign"></i>
                <input type="tel" min="1" id="Quantity"></input>
                <i class="icon-plus-sign"></i>
                </div>
                <br/>
                <i class="icon-heart-empty"></i>
              </Card.Body>
              <Card.Footer>
                <Button variant="success"><i class="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={Category[4].imagem}/>
              <Card.Body>
        <Card.Title>{Category[4].nome}</Card.Title>
                <Card.Text id="Preco">
                  R$ {Category[4].preco}
                </Card.Text>
                <div id="Quantidade">
                  <i class="icon-minus-sign"></i>
                  <input type="tel" min="1" id="Quantity"></input>
                  <i class="icon-plus-sign"></i>
                </div>
                <br/>
                <i class="icon-heart-empty"></i>
              </Card.Body>
              <Card.Footer>
                <Button variant="success"><i class="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img id="Nissin" variant="top" src={Category[5].imagem} />
              <Card.Body>
                <Card.Title>{Category[5].nome}</Card.Title>
                <Card.Text>
                  R$ {Category[5].preco}
                </Card.Text>
                <div id="Quantidade">
                  <i class="icon-minus-sign"></i>
                  <input type="tel" min="1" id="Quantity"></input>
                  <i class="icon-plus-sign"></i>
                </div>
                <br/>
                <i class="icon-heart-empty"></i>
              </Card.Body>
              <Card.Footer>
                <Button variant="success"><i class="icon-shopping-cart"></i> Adicionar ao Carrinho</Button>
              </Card.Footer>
            </Card>
          </CardDeck>
          </div>
        </div>
        );
    }
}