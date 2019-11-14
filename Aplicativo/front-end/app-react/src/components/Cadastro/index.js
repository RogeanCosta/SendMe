import React from 'react'
import ReactDOM from 'react-dom'
import CampoDeTexto from './componente/CampoDeTexto'
import './index.css'

export default () => (
    <div id="Form"> 
        <header> Tela de Cadastro </header>
            <div id="Container">
            <CampoDeTexto type="text" frase="Nome Completo" name="Nome"/>
            <CampoDeTexto type="text" frase="Data de Nascimento" name="Nascimento"/>
            <br/>
            <CampoDeTexto type="text" frase="RG" name="RG"/>
            <CampoDeTexto type="text" frase="CPF" name="CPF"/>
            <br/>
            <CampoDeTexto type="text" frase="CEP" name="CEP"/>
            <br/>
            <CampoDeTexto type="text" frase="Endereço" name="Endereco"/>
            <CampoDeTexto type="text" frase="Complemento" name="Complemento"/>
            <CampoDeTexto type="text" frase="Número" name="number"/>
            <br/>
            <CampoDeTexto type="text" frase="Cidade" name="Cidade"/>
            <CampoDeTexto type="text" frase="Estado" name="Estado"/>
            <br/>
            <CampoDeTexto type="text" frase="Telefone01" name="Telefone01"/>
            <CampoDeTexto type="text" frase="Telefone02" name="Telefone02"/>
            <br/>
            <CampoDeTexto type="email" frase="Email" name="Email"/>
            <CampoDeTexto type="email" frase="Confirme o email" name="ConfirmarEmail"/>
            <br/>
            <CampoDeTexto type="text" frase="Senha" name="Senha"/>
            <CampoDeTexto type="text" frase="Confirme a Senha" name="ConfirmarSenha"/>
            </div>

            <div id="botoes">
                <button type="submit" id="Cadastro">Cadastrar</button>
                <button type="submit" id="Cancelar">Cancelar</button>
            </div>
        </div>);