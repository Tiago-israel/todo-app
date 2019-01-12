import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import HttpService from '../../services/httpService'
import get from '../../libs/rxaxios'

export default class Todo extends Component {

    httpService = new HttpService('todos');

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
        this.refresh('', 'sort=-createdAt');
        get('https://viacep.com.br/ws/01001000/json/', (data) => {
            debugger;
            console.log(data);
        })
    }

    refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/` : '';
        this.httpService.get('', `sort=-createdAt${search}`,
            (list) => {
                this.setState({ list, description });
            }
        );
    }

    handleChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleAdd = () => {
        const body = { description: this.state.description }
        this.httpService.post('', body, () => { this.refresh() });
    }

    handleRemove = todo => {
        this.httpService.delete('', todo._id, () => { this.refresh(this.state.description) });
    }


    handleMarkAsDone = todo => {
        this.httpService.put('', { ...todo, done: true }, todo._id, data => this.refresh(this.state.description));
    };

    handleMarkAsPending = todo => {
        this.httpService.put('', { ...todo, done: false }, todo._id, data => this.refresh(this.state.description));
    };

    handleSearch = () => this.refresh(this.state.description);

    handleClear = () => this.refresh();

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}