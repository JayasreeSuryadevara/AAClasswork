import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './todos/todo_list_container';


const App = ({ store }) => (
    <Provider store={store}>
        <div>
            <h1>Todos:</h1>
            <TodoListContainer />  
        </div>
    </Provider>
);

export default App;