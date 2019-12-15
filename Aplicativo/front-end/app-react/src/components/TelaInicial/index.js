import React, { Fragment, Component } from "react"
import Col from 'react-bootstrap/Col'
import './telaInicial.css'
import './telaInicial.css'
import firebase from "../../config/firebase"
import chunk from "../../utils/chunk"
import Row from 'react-bootstrap/Row'

export default class TelaInicial extends Component {
    constructor() {
        super();
        this.db = firebase.database()
    }

    state = {
        lojas: []
    }

    componentDidMount() {
        this.db.ref('lojas').on("value", snapshot => {
            let lojas = snapshot.val();
            this.setState({ lojas })
        });
    }

    renderLojas() {
        const decks = chunk(this.state.lojas, 5);
        return decks.map(deck => (
            <Fragment>
                <div className="jumbotron vertical-center" id= "centralizarLojas">
                    <div className="container">
                        <Row id = "linhaLojas" >
                            {deck.map(lojas => (
                                <Col sm="2" >
                                    <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5" style={{ backgroundImage: `url("${lojas.imagem}")` }} > </button>
                                </Col>
                            ))
                            }
                            </Row>
                         </div>
                </div>
            </Fragment>
        ));
    }
    render() {
        return (
            <div className="container ">
                <div className="row " id="rowUser" >
                    <div className="col-1" id="colUser">
                        <div className="item" id="user">
                            <button id="buttonAvatar" class="btn btn-primary btn-circle btn-xl" style={{ backgroundImage: "url('/images/usertest')" }}> </button>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="item" id="carrinho">
                            <button type="buttonCarrinho" class="btn btn-secondary btn-sm">carrinho
                            <i className="icon-shopping-cart"></i>
                            </button> </div>

                    </div>
                </div>
                <p className="text-md-center">Selecione o supermercado</p>
                {this.renderLojas()}
            </div>
        );
    }
}