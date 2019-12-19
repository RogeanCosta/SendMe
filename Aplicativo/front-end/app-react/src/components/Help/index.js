import React, { Fragment } from "react";
import './help.css'


export default () => (
    <Fragment>
        <div class="container">
            <div className="card card-signin my-5">
                <h2>FAQ</h2>
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Quais são as formas de pagamento disponíveis?</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Cartões de Crédito nas bandeiras MasterCard, Elo, Visa e Cartão de Débito.
                                                    </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Como faço para alterar meu endereço?</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">As alterações de endereço devem ser feitas em alterar dados no seu perfil.</div>
                        </div>
                    </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Onde posso acessar meus produtos marcados como favoritos?</a>
                            </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse">
                            <div class="panel-body">Depois de selecionar a loja você será direcionado para a tela de categorias, entre as categorias você encontra os seus produtos favoritos.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-signin my-5" id="tela-contatos">
                <div>
                    <h6>Problemas com o aplicativo? Fale conosco:</h6>
                    <p>&#128386; sendme@gmail.com</p>
                </div>
            </div>
        </div>
    </Fragment>
);
