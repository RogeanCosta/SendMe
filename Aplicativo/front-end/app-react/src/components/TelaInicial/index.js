import React, { Fragment } from "react";
import './telaInicial.css'

export default () => (
    <Fragment>
        <div className="container ">
            <div className="row " id="rowUser" >
                <div class="col-1" id = "colUser">
                    <div class="item" id="user">
                        <button id="button7" class="btn btn-primary btn-circle btn-xl"> </button>
                    </div>
                </div>
                <div class="col-1">
                    <div class="item" id = "carrinho">
                        <button type="button8" class="btn btn-secondary btn-sm">carrinho
                            <i class="glyphicon glyphicon-shopping-cart"></i>
                        </button> </div>

                </div>
            </div>
            <p class="text-md-center">Selecione o supermercado</p>
        </div>
        <div class="jumbotron vertical-center">
            <div className="container">
                <div className="row justify-content-md-center" id="row" >
                    <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5"> </button>
                    <button id="button2" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                    <button id="button3" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                    <button id="button4" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                    <button id="button5" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                </div>

                <div className="row mt-3 justify-content-md-center" id="row" >
                    <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5">
                    </button>

                    <button id="button2" class="btn btn-primary btn-circle btn-xl mr-5">
                    </button>

                    <button id="button3" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                    <button id="button4" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                    <button id="button5" class="btn btn-primary btn-circle btn-xl mr-5"></button>
                </div>
            </div>
        </div>
    </Fragment>
);
