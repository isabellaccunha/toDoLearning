import React, { Component } from 'react';
import './updateTask.css';

export default class UpdateTask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            task:'comprar cebola',
            msg: ''
        }
    }
    
    updateMyTask = (e) =>{
        e.preventDefault();
        console.log(this.state.task)
    }

    setUpdateTask = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    render() {
        return(
            <section className="card">
                {/* input tem que vir preenchido */}
                <form onSubmit={this.updateMyTask} method="post">
                    <h1 className="updateTitle">Atualizar Tarefa</h1>
                    <input className="updateTextBox" 
                        type="text" 
                        value={this.state.task}
                        onChange={this.setUpdateTask}
                     />
                    <button className="updateButton" type="submit">Confirmar</button>
                </form>
            </section>
        )
    }
}