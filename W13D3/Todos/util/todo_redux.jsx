import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import { receiveTodo, receiveTodos } from '../actions/todo_action';
import Root from '../components/root';


// debugger;
const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
// debugger;
document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, main);
});


