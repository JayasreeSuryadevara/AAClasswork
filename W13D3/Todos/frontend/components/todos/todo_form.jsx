import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, {id: uniqueId()});
        this.props.receiveTodo(todo);
        
    }

    update (property) {
        return e => this.setState({ [property]: e.target.value });//[id]:
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
            </form>
        );
    }
}

export default TodoForm;