function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
  ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
    const [x, y] = [this.pos[0],this.pos[1]];
    const [x2, y2] = [(x +  this.vel[0]), (y + this.vel[1])];
    this.pos = this.game.wrap([x2, y2]);
    return this.pos;
};

MovingObject.prototype.isCollidedWith = function (otherObject){
  let limit = this.radius + otherObject.radius;
  const [x1, y1] = this.pos;
  const [x2, y2] = otherObject.pos;
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  if (distance < limit) {
    return true;
  } else {
    return false;
  };
};

MovingObject.prototype.collideWith = function(otherObject){
  asteroid = this;
  this.game.remove(otherObject);
  this.game.remove(asteroid);
};

module.exports = MovingObject;


