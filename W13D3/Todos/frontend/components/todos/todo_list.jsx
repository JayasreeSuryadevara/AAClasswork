import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
    
        const { todos, receiveTodo } = this.props;
        const todoListItems = todos.map((todo,i) =>  (
            <TodoListItem key={todo.id} todo={todo} /> 
        ));

        return (
            <div>
                <ul>
                    { todoListItems }
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        );
    }

}

export default TodoList;