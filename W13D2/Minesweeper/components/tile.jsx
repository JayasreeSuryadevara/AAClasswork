import React from 'react';

class Tile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const flagged = e.altKey ? true:false;
        this.props.updateGame(this.props.tile, flagged);
    }

    render(){
        const tile = this.props.tile;
        let klass, text, count;
        if (tile.explored) {
            if (tile.bombed) {
                klass = 'bombed';
                text = '\u2622';
            } else {
                klass = 'explored';
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count} ` : "");
            }
        } else if (tile.flagged) {
            klass = 'flagged';
            text = '\u2691';
        } else {
            klass = 'unexplored';
        }
        klass = `tile ${klass}`;
        return (<div className="tile">
                    <div onClick={this.handleClick}>
                        {this.state.text}
                    </div>
                </div>
        )
    }
}

export default Tile;