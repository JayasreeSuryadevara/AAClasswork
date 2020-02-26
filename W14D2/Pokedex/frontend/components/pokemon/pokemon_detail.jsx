import React from 'react';

class PokemonDetail extends React.Component{

    componentDidMount(){
        this.props.requestSinglePokemon(this.props.match.params.id)
    } 

    render() {
        console.log("Detail: ", this.props);
        // const pokemon = this.props.items;
        return (
            <h1>Show Pokemon</h1>
        );
    };

};

export default PokemonDetail;
