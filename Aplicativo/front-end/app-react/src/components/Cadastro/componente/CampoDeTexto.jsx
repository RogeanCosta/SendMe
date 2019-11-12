import React, {Component} from 'react'

export default class CampoDeTexto extends Component{
    constructor(props){
        super(props)
        this.setTexto = this.setTexto.bind(this)
    }

    state={
        texto: ""
    }

    setTexto(e){
        this.setState({texto: e.target.value})
    }

    render(){
        const {texto} = this.state
        const {frase, name, type} = this.props
        return <input text={type} placeholder={frase} value={texto} onChange={this.setTexto} id={name}/>;
    }
}