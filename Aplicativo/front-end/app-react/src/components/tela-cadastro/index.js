import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import handleInputChange from "../../utils/handleInputChange";
import firebase from "../../config/firebase"
import { withRouter } from 'react-router-dom';

class Cadastro extends React.Component {
  constructor() {
    super();
    this.handleChange = handleInputChange.bind(this);
    this.db = firebase.database()
    this.auth = firebase.auth()
  }

  state = {
    idUsuario: null,
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    cep: "",
    endereco: "",
    complemento: "",
    numero: "",
    cidade: "",
    estado: "",
    telefone1: "",
    telefone2: "",
    email: "",
    confirmaEmail: "",
    senha: "",
    confirmaSenha: ""
  };

  componentDidMount() {
    if (!this.props.location || !this.props.location.state) {
      return;
    }

    const { userId } = this.props.location.state;
    if (userId) {
      this.db.ref('usuarios').orderByChild("_uid").equalTo(userId).on("value", snapshot => {
        const [idUsuario, userData] = Object.entries(snapshot.val())[0];
        this.setState({
          idUsuario,
          nome: userData.nome,
          dataNascimento: userData.dataNascimento,
          rg: userData.rg,
          cpf: userData.cpf,
          cep: userData.cep,
          endereco: userData.endereco,
          complemento: userData.complemento,
          numero: userData.numero,
          cidade: userData.cidade,
          estado: userData.estado,
          telefone1: userData.telefone1,
          telefone2: userData.telefone2,
          email: userData.email,
          confirmaEmail: userData.email
        });
      });
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.idUsuario) {
      const { idUsuario, confirmaEmail, senha, confirmaSenha, ...updates } = this.state
      const ref = this.db.ref(`usuarios/${this.state.idUsuario}`);
      ref.update(updates, () => {
        alert('Usuário atualizado com sucesso!');
        this.props.history.push('/inicial');
      });

      return;
    }

    this.auth
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(({ user }) => {
        const { confirmaEmail, confirmaSenha, senha, ...newUser } = this.state;
        this.db.ref('usuarios').push().set({ ...newUser, _uid: user.uid });

        alert('Usuário adicionado com sucesso!');

        this.props.history.push('/inicial');
      })
      .catch(function (error) {
        alert('Erro ao criar usuário!')
        console.log(error.code, "-", error.message);
      });
  };

  handleReset = e => {
    e.preventDefault();

    if (this.state.idUsuario) {
      return this.props.history.goBack()
    }

    return this.props.history.push('/login')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <h1>{this.state.idUsuario ? 'Meus Dados' : 'Cadastro'}</h1>
        <div id="Container">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label id="RogeanLabels">Nome Completo</Form.Label>
              <Form.Control name="nome" type="text" placeholder="Digite seu nome" onChange={this.handleChange} value={this.state.nome} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNascimento">
              <Form.Label id="RogeanLabels">Data de Nascimento</Form.Label>
              <Form.Control name="dataNascimento" type="text" placeholder="DD/MM/AAAA" onChange={this.handleChange} value={this.state.dataNascimento} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridRG">
              <Form.Label id="RogeanLabels">RG</Form.Label>
              <Form.Control name="rg" type="text" placeholder="Digite seu RG" onChange={this.handleChange} value={this.state.rg} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCPF">
              <Form.Label id="RogeanLabels">CPF</Form.Label>
              <Form.Control name="cpf" type="text" placeholder="Digite seu CPF" onChange={this.handleChange} value={this.state.cpf} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridCEP">
            <Form.Label id="RogeanLabels">Código Postal</Form.Label>
            <Form.Control name="cep" placeholder="Digite seu CEP" onChange={this.handleChange} value={this.state.cep} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEndereco">
              <Form.Label id="RogeanLabels">Endereço</Form.Label>
              <Form.Control name="endereco" placeholder="Rua, Avenida..." onChange={this.handleChange} value={this.state.endereco} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridComplemento">
              <Form.Label id="RogeanLabels">Complemento</Form.Label>
              <Form.Control name="complemento" placeholder="Bloco, Apt., Casa..." onChange={this.handleChange} value={this.state.complemento} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNumero">
              <Form.Label id="RogeanLabels">Numero</Form.Label>
              <Form.Control name="numero" placeholder="Ex. 1245" onChange={this.handleChange} value={this.state.numero} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCidade">
              <Form.Label id="RogeanLabels">Cidade</Form.Label>
              <Form.Control name="cidade" placeholder="Digite a sua Cidade" onChange={this.handleChange} value={this.state.cidade} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEstado">
              <Form.Label id="RogeanLabels">Estado</Form.Label>
              <Form.Control name="estado" as="select" onChange={this.handleChange} value={this.state.estado}>
                <option value="">Escolha seu Estado</option>
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
              <Form.Control name="telefone1" type="text" placeholder="Digite seu Telefone" onChange={this.handleChange} value={this.state.telefone1} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label id="RogeanLabels">Telefone 02</Form.Label>
              <Form.Control name="telefone2" type="text" placeholder="Digite seu Telefone" onChange={this.handleChange} value={this.state.telefone2} />
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
                value={this.state.email}
                disabled={this.state.idUsuario}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label id="RogeanLabels">Confirmar Email</Form.Label>
              <Form.Control name="confirmaEmail" type="email" placeholder="Confirme seu Email" onChange={this.handleChange} value={this.state.confirmaEmail} disabled={this.state.idUsuario} />
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
                value={this.state.senha}
                disabled={this.state.idUsuario}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label id="RogeanLabels">Confirmar Senha</Form.Label>
              <Form.Control name="confirmaSenha" type="password" placeholder="Confirme sua Senha" onChange={this.handleChange} value={this.state.confirmaSenha} disabled={this.state.idUsuario} />
            </Form.Group>
          </Form.Row>

          <div id="buttons" className="buttons">
            <Button id="cadastrar" variant="success" type="submit">
              {this.state.idUsuario ? 'Atualizar' : 'Cadastrar'}
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

export default withRouter(Cadastro);