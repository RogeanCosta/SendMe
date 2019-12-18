import React from "react";
import "./dados.css";
import Form from "react-bootstrap/Form";
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
        <h1>Atualização cadastral</h1>
        <div id="Container" >


        <div class="panel-group">
          <div class="painel-dados" id="painel-esquerdo">
           <div class="panel-heading">Nome completo</div>
           <div class="panel-body">dado do firebase</div>
          </div>

          <div class="painel-dados">
           <div class="panel-heading">Data de Nascimento</div>
           <div class="panel-body">dado do firebase</div>
          </div>   
        </div>
        </div>

        <div id="Container">
          <div class="panel-group">
            <div class="painel-dados" id="painel-esquerdo">
              <div class="panel-heading">RG</div>
              <div class="panel-body">dado do firebase</div>
            </div>

            <div class="painel-dados">
              <div class="panel-heading">CPF</div>
              <div class="panel-body">dado do firebase</div>
            </div>   
          </div>
        </div>

        <div id="Container">

          <div class="panel-group">
            <div class="painel-dados" id="painel-esquerdo">
              <div class="panel-heading">Endereço</div>
              <div class="panel-body">Endereço atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite seu novo CEP" />                  
              </div>
            </div>
          </div>
        </div>

        <div id="Container">
          <div class="panel-group">
            <div class="painel-dados" id="painel-cep">
              <div class="panel-heading">CEP</div>
              <div class="panel-body">CEP atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite seu novo endereço" />                  
              </div>
            </div>

            <div class="painel-dados" id="painel-numero">
              <div class="panel-heading">Número</div>
              <div class="panel-body">Número atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite o novo número" />
              </div>
            </div>

            <div class="painel-dados" id="numero">
              <div class="panel-heading">Complemento</div> 
              <div class="panel-body">Complemento atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite o novo complemento" />                  
              </div>
            </div>
          </div>
        </div>

        <div id="Container">
          <div class="panel-group">
            <div class="painel-dados" id="painel-esquerdo">
              <div class="panel-heading">Cidade</div>
              <div class="panel-body">Cidade atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite a nova cidade" />                  
              </div>
            </div>

            <div class="painel-dados" id="estado">
              <div class="panel-heading">Estado</div>
              <div class="panel-body">Estado atual (dado do firebase)</div>
              <div class="panel-body">
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
              </div>
            </div>
          </div>
        </div>

        <div id="Container">
          <div class="panel-group">
            <div class="painel-dados" id="painel-esquerdo">
              <div class="panel-heading">Telefone 01</div>
              <div class="panel-body">Telefone atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite o novo número" />                  
              </div>
            </div>

            <div class="painel-dados" >
              <div class="panel-heading">Telefone 02</div>
              <div class="panel-body">Telefone atual (dado do firebase)</div>
              <div class="panel-body">
                <Form.Control type="text" id="form-nome" placeholder="Digite o novo número" />                  
              </div>
            </div>
          </div>
        </div>

        <div id="Container">
           <div class="panel-group">
            <div class="painel-dados" id="painel-esquerdo">
              <div class="panel-heading">Email</div>
              <div class="panel-body">dado do firebase</div>
            </div>
           </div>

          <div id="buttons" className="buttons">
            <Button id="cadastrar" variant="success" type="submit">
              Atualizar
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
