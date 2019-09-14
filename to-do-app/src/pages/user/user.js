import React, { Component } from 'react';
import './user.css';

export default class User extends Component{
    render() {
        return(
            <section className="userCard">
                <h1 className="userTitle">Escolha o usuário</h1>
                <ul className="userList">
                    <li>
                        <a href="">Marllon</a>
                    </li>
                    <li>
                        <a href="">Breno</a>
                    </li>
                    <li>
                        <a href="">Guilherme</a>
                    </li>
                </ul>
            </section>
        )
    }
}