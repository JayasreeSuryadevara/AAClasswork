import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearTodos = this.clearTodos.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        const newId = uniqueId();
        console.log(newId);
        const todo = Object.assign({}, this.state, { id: newId });
        this.props.receiveTodo(todo);
    }

    clearTodos () {
    
    }

    update (property) {
        return e => this.setState({ [property]: e.target.value });
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <label>Title:
                    <input
                    className="title"
                    value={this.state.title}
                    onChange= { this.update('title')}
                    />
                </label>
                <label>Body:
                    <input
                        className="body"
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                </label>
                <button className="create-button">Create Todo</button>
                <br/>
                <button className="clear-todos" onClick={this.clearTodos()}>Clear All Todos!</button>
            </form>
        );
    }
}

export default TodoForm;