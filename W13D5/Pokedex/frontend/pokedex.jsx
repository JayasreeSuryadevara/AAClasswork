import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
debugger;
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

