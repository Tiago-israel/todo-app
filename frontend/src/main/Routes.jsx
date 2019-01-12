import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from '../components/todo/Todo'
import About from '../components/about/About'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Todo} />
            <Route path="/todos" component={Todo} />
            <Route path="/sobre" component={About} />
            <Route path='*' component={Todo} />
        </Switch>
    </ BrowserRouter>
);