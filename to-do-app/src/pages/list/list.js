import React, {Component} from "react";
import './list.css';
import { Link } from 'react-router-dom';

export default class List extends Component{

    constructor(props){
        super(props);

        //const { user } = this.props.location.state;
        //console.log(user)

        this.state = {
            user:{
                id:1,
                name:'bruno',
                tasks:[
                    {tarefa:'Comprar manga'},
                    {tarefa:'Comprar feijão'},
                    {tarefa:'Comprar arroz'}
                ]
            }
        }
    }

    
    render(){
        return (
            <section className="list">
                <h1>Lista de tarefas</h1>
                <span><button className="btn-adicionar"><i className="fas fa-plus"></i></button></span>
                <div className="lista-tarefa">
                   <ul className="listas">
                        {this.state.user.tasks.map(user => (
                            <li key={user.id}>
                               {user.tarefa}
                               <Link to="/update">HOME</Link> 
                               <button className="btn-update"><i className="fas fa-pen"></i></button>
                               <button className="btn-excluir"><i className="fas fa-trash"></i></button>
                            </li>
                        ))}   
                    </ul>
                </div>
            </section>
        )
    }
} 