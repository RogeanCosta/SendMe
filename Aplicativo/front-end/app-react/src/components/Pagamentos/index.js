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
                    <h1 id="realinhar">Forma de Pagamento</h1>
                </div>
                <fieldset>
                    <Form.Group as={Row} id="payment">
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="À Vista"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            /> <i class="icon-money"></i>
                            <Form.Check
                                type="radio"
                                label="Cartão"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            /><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="credit-card" class="svg-inline--fa fa-credit-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path></svg>
                        </Col>
                    </Form.Group>
                </fieldset>
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
                        <Form.Group as={Col} controlId="formGridComplemento">
                            <Form.Label id="RogeanLabels">Complemento</Form.Label>
                            <Form.Control name="complemento" placeholder="Bloco, Apt., Casa..." onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridNumero">
                            <Form.Label id="RogeanLabels">Numero</Form.Label>
                            <Form.Control name="numero" placeholder="Ex. 1245" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row id="CEPalinhado">
                        <Form.Group as={Col} controlId="EntradaBairro">
                            <Form.Label id="EspecifyLabel">Bairro</Form.Label>
                            <Form.Control name="bairro" placeholder="Digite o seu bairro" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="EntradaCEP">
                            <Form.Label id="RogeanLabels">CEP</Form.Label>
                            <Form.Control name="cep" placeholder="Digite o seu CEP" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <div id="conclusao">
                        <Button variant="success" id="pedir">Finalizar Pedido</Button>
                        <Button variant="danger" id="nonpedir">Cancelar</Button>
                    </div>
                    <form action="https://us-central1-sendme-a0d34.cloudfunctions.net/enviarEmail" method="post">
                        <label>Assunto:</label>
                        <input type="text" name="assunto" />

                        <label>Destinatários:</label>
                        <input type="text" name="destinatarios" />

                        <label>Mensagem:</label>
                        <input type="text" name="corpo" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        );
    }
}