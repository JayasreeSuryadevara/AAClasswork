const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 10,
//     color: "#00FF00"
//   });

// const asty = new Asteroid([100, 100]);

// const game = new Game();


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const gameView = new GameView(ctx);
  // mo.draw(ctx);
  // asty.draw(ctx);
  // asty.move(ctx);
  // asty.draw(ctx);
  gameView.start(ctx);

});
