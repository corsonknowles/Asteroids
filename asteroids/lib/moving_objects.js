// MovingObject (lib/moving_object.js)
// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move, MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).
const Circle = require("./circles.js");

function MovingObject () {
  this.pos = pos
  this.vel = vel
  this.radius = radius
  this.color = color
};


MovingObject.prototype.move = function () {
  this.pos = this.pos + this.vel
};

// Write a MovingObect.prototype.draw(ctx) method. Draw a circle of the appropriate radius centered at pos. Fill it with the appropriate color. Refer to the Drunken Circles demo if you need a refresher on Canvas.
//
// Write a MovingObject.prototype.move method. Increment the pos by the vel.
MovingObject.prototype.draw(ctx) = function () {
  let circle = new Circle(pos[0], pos[1], radius, color);
  circle.render();
};

MovingObject.prototype.distanceFrom(otherObject) = function () {
  let x, y = this.pos;
  let w, z = otherObject.pos;
  let distance = Math.exp((x - w), 2) + Math.exp((y - z), 2);
  return distance;
}

MovingObject.prototype.isCollidedWith(otherMovingObject) = function () {
  let separation = this.distanceFrom(otherMovingObject);
  if (separation < (this.radius + otherMovingObject.radius)) {
    return true;
  }
  return false;
};

module.exports = MovingObject;
