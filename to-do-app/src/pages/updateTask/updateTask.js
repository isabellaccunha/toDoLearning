import React, { Component } from 'react';
import './updateTask.css';

export default class UpdateTask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            descricao: 'comprar cebola',
            status: 'TO DO',
        }
    }
    render() {
        return(
            <section className="card">
                <h1 className="updateTitle">Criar Tarefa</h1>
                {/* input tem que vir preenchido */}
                <input className="updateTextBox" type="text" value={this.state.descricao} />
                <div className="updateStatus__wrapper">
                    <input className="updateStatus" type="radio" name="teste" value="todo"/>
                    <label>TO DO</label>
                    <input className="updateStatus" type="radio" name="teste" value="inprogress"/>
                    <label>IN PROGRESS</label>
                    <input className="updateStatus" type="radio" name="teste" value="done"/>
                    <label>DONE</label>
                </div>
                <button className="updateButton">Confirmar</button>
            </section>
        )
    }
}