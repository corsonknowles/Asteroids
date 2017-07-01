const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid (pos, color = "777777", radius = 10) {
  this.COLOR = color;
  this.RADIUS = radius;
  MovingObject.call(this, pos, Util.randomVec(7), RADIUS, COLOR);
}

Util.inherit(Asteroid, MovingObject);

module.exports = Asteroid;
