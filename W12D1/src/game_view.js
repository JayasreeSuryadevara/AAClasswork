const Game = require("./game.js");

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function(ctx){
    // debugger;
    setInterval(this.game.draw.bind(this.game, ctx), 50);
    setInterval(this.game.step.bind(this.game, ctx), 50);
}



module.exports = GameView;