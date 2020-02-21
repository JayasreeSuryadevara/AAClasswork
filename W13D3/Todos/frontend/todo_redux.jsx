import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_action';
import Root from './components/root';
import allTodos from './reducers/selectors';

// debugger;
// window.allTodos = allTodos(store.getState());
// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
document.addEventListener('DOMContentLoaded', (e) => {
    const store = configureStore();
    window.store = store;
    const main = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, main);
});


