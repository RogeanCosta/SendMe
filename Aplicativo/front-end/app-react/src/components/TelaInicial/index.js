import React, { Fragment, Component } from "react"
import Col from 'react-bootstrap/Col'
import './telaInicial.css'
import './telaInicial.css'
import firebase from "../../config/firebase"
import chunk from "../../utils/chunk"
import Row from 'react-bootstrap/Row'
import { withRouter } from "react-router-dom";

class TelaInicial extends Component {
  constructor() {
    super();
    this.db = firebase.database()
  }

  state = {
    lojas: []
  }

  componentDidMount() {
    this.db.ref('lojas').on("value", snapshot => {
      let lojas = Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, _id: key }));
      this.setState({ lojas })
    });
  }

  renderLojas() {
    const decks = chunk(this.state.lojas, 5);
    return decks.map(deck => (
      <Fragment>
        <div className="jumbotron vertical-center" id="centralizarLojas">
          <div className="container">
            <Row id="linhaLojas" >
              {deck.map(lojas => (
                <Col sm="2">
                  <button
                    id="button1"
                    className="btn btn-primary btn-circle btn-xl mr-5"
                    style={{ backgroundImage: `url("${lojas.imagem}")` }}
                    onClick={() => this.props.history.push({
                      pathname: '/loja',
                      state: {
                        loja: lojas,
                        userId: this.props.userId
                      }
                    })} />
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
              <button id="buttonAvatar" className="btn btn-primary btn-circle btn-xl" style={{ backgroundImage: "url('/images/usertest')" }}> </button>
            </div>
          </div>
        </div>
        <p className="text-md-center">Selecione o supermercado</p>
        {this.renderLojas()}
      </div>
    );
  }
}

export default withRouter(TelaInicial)