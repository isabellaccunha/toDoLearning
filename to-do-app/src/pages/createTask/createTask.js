import React, { Component } from 'react';
import './createTask.css';

export default class CreateTask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            status: 'TO DO'
        }
    }
    render() {
        return(
            <section className="card">
                <h1 className="createTitle">Criar Tarefa</h1>
                <span>status: {this.state.status}</span>
                <input className="createTextBox" type="text" placeholder="Digite aqui sua tarefa"/>
                <button className="createButton" >Confirmar</button>
            </section>
        )
    }
}