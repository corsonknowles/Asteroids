Function.prototype.inherits = function(parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject () {
  this.existential_anxiety = 100;
}

MovingObject.prototype.beSadAboutTheUniverse = function() {
  for (let i = 0; i < 10; i++) {
    console.log("aaaaaaaaaaaaaaa");
  }
}

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

ship = new Ship();

ship.__proto__.accelerate = function _accelerate (speed) {
  console.log(`your speed increases by ${speed} megaparsecs`)
};


Function.prototype.betterInherits = function _betterInherits (SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  // this.prototype.constructor = this;
};


function FlyingAtomicConstructions () {
  this.existential_anxiety = 100;
}

function SpaceCanister () {
  FlyingAtomicConstructions.call(this)
  this.color = "Osage Orange"
};
SpaceCanister.betterInherits(FlyingAtomicConstructions);

function SkyRock () {};
SkyRock.betterInherits(FlyingAtomicConstructions);

myTinCan = new SpaceCanister();

myTinCan.__proto__.accelerate = function _accelerate (speed) {
  console.log(`your speed increases by ${speed} megaparsecs`)
};

FlyingAtomicConstructions.prototype.beSadAboutTheUniverse = function() {
  for (let i = 0; i < 10; i++) {
    console.log("aaaaaaaaaaaaaaa");
  }
}

bob = new SkyRock();

SpaceCanister.prototype.contemplateExistence = function() {
  console.log("hmmmm");
}
