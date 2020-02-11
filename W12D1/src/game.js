function Game() {
  this.asteroids = this.addAsteroids();
};

const DIM_X = 1; 
const DIM_Y = 1; 
const NUM_ASTEROIDS = 10;


Game.prototype.addAsteroids = function() {

  let asteroids = [];

  for(i = 0; i < NUM_ASTEROIDS; i++){
    asteroids.push(new Asteroid(this.randomPosition(), this));
  };
  return asteroids;
};

Game.prototype.randomPosition = function() {
  const x = Math.floor((Math.random() * 600));
  const y = Math.floor((Math.random() * 600));
  return [x, y];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, 600, 600);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 600, 600);
  asteroids = this.asteroids;
  asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function(ctx){
  asteroids = this.asteroids;
  asteroids.forEach((asteroid) => {
    asteroid.move(ctx);
  });
};

Game.prototype.wrap = function(pos){
  [x, y] = pos;

  if (x <= 30 || x >= 570 || y <= 30 || y >= 570){
    pos = this.randomPosition();
  };

  return pos;
};

Game.prototype.checkCollisions = function (){
  for(let j = 0; j < this.asteroids.length; j++){
    for(let i = j + 1; i < this.asteroids.length; i++){
      asteroid1 = this.asteroids[j];
      asteroid2 = this.asteroids[i];
      debugger;
      if (asteroid1.isCollidedWith(asteroid2)){
         asteroid1.collideWith(asteroid2);
      };
    }
  }
}

Game.prototype.step = function(ctx){
  this.moveObjects(ctx);
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
  const i = this.asteroids.indexOf(asteroid);
  const removedObjs = [];
  removedObjs.push(i);
  return removedObjs;
};

module.exports = Game;

