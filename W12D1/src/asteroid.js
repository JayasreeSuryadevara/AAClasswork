const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(pos, game){
    this.pos = pos;
    this.vel = Util.randomVec(30);
    this.color = "#808080";
    this.radius = 15;
    this.game = game;

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;