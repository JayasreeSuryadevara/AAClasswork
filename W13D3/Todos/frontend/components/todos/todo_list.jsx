import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import uniqueId from '../../util/unique_id';

class TodoList extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        const { todos, receiveTodo } = this.props;
        const todoListItems = todos.map((todo,i) =>  (
            <TodoListItem key={uniqueId()} todo={todo} /> 
        ));
        return (
            <>
                <ul>
                    { todoListItems }
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </>
        );
    }

}

export default TodoList;