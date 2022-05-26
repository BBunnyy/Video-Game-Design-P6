/* 
  Creates the rock image, spawns kelp on the rock, and spawns bubbles from the rock when touched by a creature (only once per second at most)
*/

class Rock {
  //constructor:
  constructor(x, y) {
    //position of the rock in canvas
    this.position = new p5.Vector(x, y);

    //loading the image used for the rock
    this.image = loadImage("Rocks.png");

    //initialize array of where fish are touching the rock
    this.touchCoords = [];
    //initialize array of bubble particles
    this.particles = [];
    //track last time the rock bubbled
    this.lastBubble = 0;

    // populate the rock with kelp
    this.rockKelp = [];
    for (var k = 0; k < 10; k++) {
      var posX = random(-45, 45);
      var posY = random(-100, 80);
      var number = floor(random(1, 4));

      for (var s = 0; s < number; s++) {
        this.rockKelp.push(new Kelp(posX, posY));
      }
    }
  }

  //draw the rock, bubbles, and kelp on the rock
  draw() {
    push();
    translate(this.position.x, this.position.y);
    //draw the rock
    image(this.image, -50, -100, 100, 200);

    //draw the kelp
    for (var k = 0; k < this.rockKelp.length; k++) {
      this.rockKelp[k].draw();
    }
    pop();

    //draw bubbles
    for (var i = 0; i < this.particles.length; i++) {
      if (this.particles[i].position.y > -20) {
        this.particles[i].draw();
        this.particles[i].move();
      } else {
        //remove bubbles if out of canvas
        this.particles.splice(i, 1);
      }
    }
  }

  //Check if a creature is touching the rock
  checkTouched() {
    //if it has been 60 seconds from last bubble, create more bubbles
    if (frameCount > this.lastBubble + 60) {
      this.lastBubble = frameCount;
      this.touchCoords = []; //clear touching is occuring

      //create bubbles from every spot touched by a creature
      for (var i = 0; i < Sim.SeaCreatures.length; i++) {
        if (
          dist(this.position.x, 0, Sim.SeaCreatures[i].position.x, 0) < 50 &&
          dist(this.position.y, 0, Sim.SeaCreatures[i].position.y, 0) < 100
        ) {
          //maark areas where touching occurs
          var temp = new p5.Vector();
          temp.set(Sim.SeaCreatures[i].position);
          this.touchCoords.push(new p5.Vector(temp.x, temp.y));
        }
      }
    }
  }

  bubble() {
    //if the rock is being touched
    while (this.touchCoords.length > 0) {
      //spawn three bubbles at first touch,
      for (var b = 0; b < 3; b++) {
        this.particles.push(
          new Bubble(this.touchCoords[0].x, this.touchCoords[0].y)
        );
      }
      //remove first touch location
      this.touchCoords.splice(0, 1);
    }
  }
}
