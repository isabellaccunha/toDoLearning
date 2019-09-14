import React, {Component} from "react";
import './list.css'

export default class List extends Component{

    constructor(props){
        super(props);

        const { user } = this.props.location.state;
        console.log(user)

        this.state = {
            idUser:user,
            users:[
                {
                    id:1,
                    name:'Isabella',
                    tasks:[
                        {task:'Comprar Feijão'},
                        {task:'Comprar Arroz'},
                        {task:'Comprar Refri'}
                    ]
                },
                {
                    id:2,
                    name:'Breno',
                    tasks:[
                        {task:'Comprar Macarrão'},
                        {task:'Comprar Suco'},
                        {task:'Comprar Coca'}
                    ]
                },

                {
                    id:3,
                    name:'Bruno',
                    tasks:[
                        {task:'Comprar Camisa'},
                        {task:'Comprar carro'},
                        {task:'Comprar sabonete'}
                    ]
                },

                {
                    
                    id:4,
                    name:'Marllon',
                    tasks:[
                        {task:'Comprar rolha'},
                        {task:'Comprar alho'},
                        {task:'Comprar aipim'}
                    ]

                },

                {
                    id:5,
                    name:'Alex Marden',
                    tasks:[
                        {task:'Comprar Feijão preto'},
                        {task:'Comprar Capacete'},
                        {task:'Comprar moto'}
                    ]
                },

                {
                    id:6,
                    name:'Guilherme',
                    tasks:[
                        {task:'Comprar Feijão'},
                        {task:'Comprar Arroz'},
                        {task:'Comprar Refri'}
                    ]
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
                        {
                            this.state.users.map(user => (
                                    
                                <li><a>{user.name}</a></li>

                            ))
                        }
                    </ul>
                </div>
            </section>
        )
    }
} 