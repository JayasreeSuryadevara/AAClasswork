import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type){
        case RECEIVE_ALL_POKEMON:
           return Object.assign({}, oldState, action.pokemon);
        case RECEIVE_SINGLE_POKEMON:
            console.log("action",action);
            // return action.pokemon;
        default:
            return oldState;
    }

};

export default pokemonReducer;