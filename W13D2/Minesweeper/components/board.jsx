import React from 'react';
import Tile from './tile';
import * as Minesweeper from '../frontend/minesweeper';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const grid = this.props.board.grid.map((row, idx1) => {
           return row.map((tile,idx2) => {
               return <div className="row" key={[idx1, idx2]}>
                    <Tile  tile={tile} updateGame={this.props.updateGame}/>
                </div>
            });
        });
        return (
            <div className="tiles">
                {grid}
            </div>
        )
    }

}

export default Board;