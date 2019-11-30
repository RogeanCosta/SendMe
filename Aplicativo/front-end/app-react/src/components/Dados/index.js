import React from "react";
/*import "./dados.css";*/
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import auth from "../../config/firebase";
import handleInputChange from "../../utils/handleInputChange";

export default class Cadastro extends React.Component {
  constructor() {
    super();
    this.handleChange = handleInputChange.bind(this);
  }

  state = {
    email: "",
    senha: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => alert('Usuário adicionado com sucesso!'))
      .catch(function(error) {
        console.log(error.code, "-", error.message);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Cadastro</h1>
        <div id="Container">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label id="RogeanLabels">Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNascimento">
              <Form.Label id="RogeanLabels">Data de Nascimento</Form.Label>
              <Form.Control type="text" placeholder="DD/MM/AAAA" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridRG">
              <Form.Label id="RogeanLabels">RG</Form.Label>
              <Form.Control type="text" placeholder="Digite seu RG" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCPF">
              <Form.Label id="RogeanLabels">CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu CPF" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridCEP">
            <Form.Label id="RogeanLabels">Código Postal</Form.Label>
            <Form.Control placeholder="Digite seu CEP" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEndereco">
              <Form.Label id="RogeanLabels">Endereço</Form.Label>
              <Form.Control placeholder="Rua, Avenida..." />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridComplemento">
              <Form.Label id="RogeanLabels">Complemento</Form.Label>
              <Form.Control placeholder="Bloco, Apt., Casa..." />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNumero">
              <Form.Label id="RogeanLabels">Numero</Form.Label>
              <Form.Control placeholder="Ex. 1245" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCidade">
              <Form.Label id="RogeanLabels">Cidade</Form.Label>
              <Form.Control placeholder="Digite a sua Cidade" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEstado">
              <Form.Label id="RogeanLabels">Estado</Form.Label>
              <Form.Control as="select">
                <option>Escolha seu Estado</option>
                <option>Acre</option>
                <option>Alagoas</option>
                <option>Amapá</option>
                <option>Amazonas</option>
                <option>Bahia</option>
                <option>Ceará</option>
                <option>Distrito Federal</option>
                <option>Espírito Santo</option>
                <option>Goiás</option>
                <option>Maranhão</option>
                <option>Mato Grosso</option>
                <option>Minas Gerais</option>
                <option>Pará</option>
                <option>Paraíba</option>
                <option>Paraná</option>
                <option>Pernambuco</option>
                <option>Piauí</option>
                <option>Rio de Janeiro</option>
                <option>Rio Grande do Norte</option>
                <option>Rio Grande do Sul</option>
                <option>Rondônia</option>
                <option>Roraima</option>
                <option>Santa Catarina</option>
                <option>São Paulo</option>
                <option>Sergipe</option>
                <option>Tocantins</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label id="RogeanLabels">Telefone 01</Form.Label>
              <Form.Control type="text" placeholder="Digite seu Telefone" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label id="RogeanLabels">Telefone 02</Form.Label>
              <Form.Control type="text" placeholder="Digite seu Telefone" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label id="RogeanLabels">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Digite seu Email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label id="RogeanLabels">Confirmar Email</Form.Label>
              <Form.Control type="email" placeholder="Confirme seu Email" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label id="RogeanLabels">Senha</Form.Label>
              <Form.Control
                name="senha"
                type="password"
                placeholder="Digite sua Senha"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label id="RogeanLabels">Confirmar Senha</Form.Label>
              <Form.Control type="password" placeholder="Confirme sua Senha" />
            </Form.Group>
          </Form.Row>

          <div id="buttons" className="buttons">
            <Button id="cadastrar" variant="success" type="submit">
              Cadastrar
            </Button>
            <Button variant="danger" type="reset">
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}
