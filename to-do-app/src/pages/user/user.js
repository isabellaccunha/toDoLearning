import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './user.css';

export default class User extends Component{

    constructor(props){
        super(props);

        this.state = {
            user: [
                {
                    name:'Isabella',
                    id:1,
                },
                {
                    name:'Breno',
                    id:2,
                },
                {
                    name:'Bruno',
                    id:3,
                },
                {
                    name:'Marllon',
                    id:4,
                },
                {
                    name:'Alex Marden',
                    id:5
                },
                {
                    name:'Guilherme',
                    id:6
                }
            ]
        }

    }


    render() {
        return(
            <section className="userCard">
                <h1 className="userTitle">Escolha o usuário</h1>
                <ul className="userList">
                    {this.state.user.map(user => (
                        <li key={user.id}>
                            <Link to='/create'>{user.name}</Link>
                         </li>
                    ))}    
                </ul>
            </section>
        )
    }
}