import React from 'react';
import Board from './board'
import * as Minesweeper from '../frontend/minesweeper';

class Game extends React.Component {
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(4, 5);
        this.state = {board};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    render(){
        if (this.state.board.won()){
            winStr = "You Have Won!";
        } else if (this.state.board.lost()){
            winStr = "You Lost!";
        }
        return(
            <div>
                {/* <p>{ winStr }</p> */}
                <Board board= {this.state.board}
                    updateGame={this.updateGame}/>
            </div>
        );
    }
}

export default Game;