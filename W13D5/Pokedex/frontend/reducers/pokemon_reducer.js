import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export default pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      
    default:
      return state;
  }
}