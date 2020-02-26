import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectSinglePokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const pokemonId = ownProps.match.params.id;
    const pokemon = state.entities.pokemon[pokemonId];
    return {
        pokemon
    };
};

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);