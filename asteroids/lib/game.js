// Game (lib/game.js)
// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.

const Asteroid = require('./asteroid.js')

function Game () {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 4;
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  this.asteroids = [];

  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let randomPos = this.randomPos();
    let newAsteroid = new Asteroid(randomPos);
    this.asteroids.push(newAsteroid);
  }
}

Game.prototype.randomPos = function() {
  let randX = Math.random() * this.DIM_X;
  let randY = Math.random() * this.DIM_Y;

  return [randX, randY];
}

Game.prototype.draw(context) {
  context.clearRect();

  this.asteroids.forEach( (asteroid) => {
    asteroid.draw();
  });
}

Game.prototype.moveObjects() {
  this.asteroids.forEach( (asteroid) => asteroid.move() );
}
