import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Product from './Produtos.js'
import './index.css'

export default class Produtos extends Component{
    render(){
        return(
        <div>
          <div id="Apresentacao">
            <h1>Supermercado São Luiz - Categoria: Mercearia</h1>
          </div>
          <div>
            <CardDeck id="CardDeck">
            <Card>
              <Card.Img variant="top" src={Product[0].imagem}/>
              <Card.Body>
                <Card.Title>{Product[0].nome}<br/></Card.Title>
                <Card.Text>
                     R$ {Product[0].preco}
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
              <Card.Img variant="top" src={Product[1].imagem}/>
              <Card.Body>
        <Card.Title>{Product[1].nome}</Card.Title>
                <Card.Text id="Preco">
                  R$ {Product[1].preco}
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
              <Card.Img variant="top" src={Product[2].imagem} />
              <Card.Body>
              <Card.Title>{Product[2].nome}</Card.Title>
                <Card.Text>
                  R$ {Product[2].preco}
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
              <Card.Img variant="top" src={Product[3].imagem}/>
              <Card.Body>
                <Card.Title>{Product[3].nome}<br/></Card.Title>
                <Card.Text>
                     R$ {Product[3].preco}
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
              <Card.Img variant="top" src={Product[4].imagem}/>
              <Card.Body>
        <Card.Title>{Product[4].nome}</Card.Title>
                <Card.Text id="Preco">
                  R$ {Product[4].preco}
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
              <Card.Img id="Nissin" variant="top" src={Product[5].imagem} />
              <Card.Body>
                <Card.Title>{Product[5].nome}</Card.Title>
                <Card.Text>
                  R$ {Product[5].preco}
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