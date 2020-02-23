import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', (e) => {
    const store = configureStore();
    const main = document.getElementById('App');
    ReactDOM.render(<App store={store}/>, main);
});


