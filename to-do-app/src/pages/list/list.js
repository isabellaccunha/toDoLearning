import React, {Component} from "react";
import './list.css'

export default class List extends Component{

    constructor(props){
        super(props);

        this.state = {
            tarefasToDo: [
                {
                    name:'Comprar feijão'
                },
                {
                    name:'Comprar arroz'
                },
                {
                    name:'Comprar manteiga'
                }
            ]
        }
    }

    
    render(){
        return (
            <section className="list">
                <h1>Lista de tarefas</h1>
                <div className="lista-tarefa">
                    <ul>
                        <h2>TO DO</h2>
                        {this.state.tarefasToDo.map(tasks =>(
                            <li>
                                <a href="">{tasks.name}</a>
                                <br/><button className="btn-update">Editar</button>
                                <button className="btn-excluir">Excluir</button>
                            </li>
                        ))}
                    </ul>

                    <ul>
                        <h2>DOING</h2>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>

                    <ul>
                        <h2>DONE</h2>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
} 