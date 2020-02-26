import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import Root from './root';
import { fetchAllPokemon } from '../util/api_util';
import { receiveAllPokemon, requestAllPokemon } from '../actions/pokemon_actions';
import { selectAllPokemon } from '../reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
    
    const store = configureStore();

    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});