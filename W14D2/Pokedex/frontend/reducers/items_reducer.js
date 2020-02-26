import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;

    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            newState = action.payload.items;
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export default itemsReducer;
