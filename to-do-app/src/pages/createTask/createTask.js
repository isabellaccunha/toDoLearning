import React, { Component } from 'react';
import './createTask.css';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'TO DO',
            task: '',
            msg: ''
        }
    }

    createMyTask = (e) => {
        e.preventDefault();
        console.log(this.state.task);

        // todo: chamar api para persistir task na base de dados.
        // se task inserida com sucesso, mostrar msg de sucesso
        // caso contrário, mostrar msg do erro 

        // ok
        // this.setState({
        //     msg: 'Cadastrado com sucesso!'
        // });

        // nok
        // this.setState({
        //     msg: 'Ocorreu um erro!'
        // });
    }

    setTask = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    render() {
        return (
            <section className="card">
                <form onSubmit={this.createMyTask} method="post">
                    <h1 className="createTitle">Criar Tarefa</h1>
                    <span>status: {this.state.status}</span>
                    <input className="createTextBox"
                        type="text"
                        value={this.state.task}
                        onChange={this.setTask}
                        placeholder="Digite aqui sua tarefa"
                    />
                    <button className="createButton" type="submit">Confirmar</button>
                </form>

                <span>{this.state.msg}</span>
            </section>
        )
    }
}