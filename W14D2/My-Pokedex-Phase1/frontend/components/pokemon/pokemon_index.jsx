import React from 'react';

class PokemonIndex extends React.Component{

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <ul>
                { this.props.pokemon.map(pokemon => {
                    return <li>{ pokemon.name }</li>
                })}
            </ul>
        );
    };
};

export default PokemonIndex;