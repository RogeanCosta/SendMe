import React from 'react'
import Form, { FormRow } from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './index.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

export default class Pagamentos extends React.Component {
    render() {
        return (
            <div className="u-release">
                <div id="apresenta">
                    <h1 id="realinhar"><i class="icon-credit-card"></i>Dados do Cartão</h1>
                </div>
                <fieldset>
                    <Form.Group as={Row} id="escolhas">
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Crédito"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Débito"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <div id="carton">
                    <input type="number" placeholder="Número do Cartão" id="carton1" /> <br></br>
                    <input type="text" placeholder="Nome Impresso no Cartão" id="carton2" /> <br></br>
                    <input type="month" id="carton3"></input>
                    <input type="number" placeholder="CVV" id="carton4" /> <br></br>
                    <Form.Group as={Col} controlId="carton5" id="payment">
                        <Form.Control name="estado" as="select" onChange={this.handleChange}>
                            <option value="">Pagar em</option>
                            <option>1x</option>
                            <option>2x</option>
                            <option>3x</option>
                            <option>4x</option>
                            <option>5x</option>
                            <option>6x</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                <div id="apresenta">
                    <h1 id="realinhar"><i class="icon-truck"></i>Endereço de Entrega</h1>
                </div>
                <div id="entrega">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEndereco">
                            <Form.Label id="RogeanLabels">Endereço</Form.Label>
                            <Form.Control name="endereco" placeholder="Rua, Avenida..." onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Complemento">
                            <Form.Label id="RogeanLabelsComplemento1">Complemento</Form.Label>
                            <Form.Control name="complemento" placeholder="Bloco, Apt., Casa..." onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Numero">
                            <Form.Label id="RogeanLabelsNumero1">Numero</Form.Label>
                            <Form.Control name="numero" placeholder="Ex. 1245" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row id="CEPalinhado">
                        <Form.Group as={Col} controlId="EntradaBairro">
                            <Form.Label id="EspecifyLabel">Bairro</Form.Label>
                            <Form.Control name="bairro" placeholder="Digite o seu bairro" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="EntradaCEP">
                            <Form.Label id="RogeanLabelsCep">CEP</Form.Label>
                            <Form.Control name="cep" placeholder="Digite o seu CEP" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <div id="conclusao">
                        <Button variant="danger" id="nonpedir" onClick={() => this.props.history.push('/inicial')}>Voltar as Compras</Button>
                    </div>
                    <form action="https://us-central1-sendme-a0d34.cloudfunctions.net/enviarEmail" method="post" id="pedir">
                        <Button type="submit" variant="success" id="pedir">Finalizar Pedido</Button>
                    </form>
                </div>
            </div>
        );
    }
}