import React, { Fragment } from "react";
import './telaInicial.css'
import './avatar.js'
import './carrinho.js'
import './lojas.js'
import Avatar from "./avatar.js";
import Lojas from "./lojas.js";



export default () => (
    <Fragment>
        <div className="container " id = "container1">
            <div className="row " id="rowUser" >
                <div className="col-1" id="colUser">
                    <div className="item" id="user">
                        <button id="buttonAvatar" class="btn btn-primary btn-circle btn-xl" style={{backgroundImage: Avatar.imagem}}> </button>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item" id="carrinho">
                        <button type="buttonCarrinho" class="btn btn-secondary btn-sm">carrinho
                            <i className="glyphicon glyphicon-shopping-cart"></i>
                        </button> </div>

                </div>
            </div>
            <p className="text-md-center">Selecione o supermercado</p>
        </div>
        <div className="jumbotron vertical-center" id = "centralizar tela">
            <div className="container" id ="container2">
                <div className="row justify-content-md-center" id="row" >
                    <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[0].loja0Imagem}}> </button>
                    <button id="button2" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[1].loja1Imagem}}></button>
                    <button id="button3" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[2].loja2Imagem}}></button>
                    <button id="button4" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[3].loja3Imagem}}></button>
                    <button id="button5" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[4].loja4Imagem}}></button>
                </div>

                <div className="row mt-3 justify-content-md-center" id="row" >
                    <button id="button6" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[5].loja5Imagem}}>
                    </button>

                    <button id="button7" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[6].loja6Imagem}}>
                    </button>

                    <button id="button8" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[7].loja7Imagem}}></button>
                    <button id="button9" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[8].loja8Imagem}}></button>
                    <button id="button10" class="btn btn-primary btn-circle btn-xl mr-5" style={{backgroundImage: Lojas[9].loja9Imagem}}></button>
                </div>
            </div>
        </div>
    </Fragment>
);
