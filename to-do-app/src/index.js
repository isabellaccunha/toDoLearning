import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './pages/list/list';
import Create from './pages/createTask/createTask';
import Update from './pages/updateTask/updateTask';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/list' exact={true} component={List} />
            <Route path='/create' exact={true} component={Create} />
            <Route path='/update' exact={true} component={Update} />
        </Switch>
    </BrowserRouter>
        , document.getElementById('root')    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
