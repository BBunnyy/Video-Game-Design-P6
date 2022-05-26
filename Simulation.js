/*
  create the simulation environment!
*/

class Simulation {
  //create default creature objects!
  setDefaults() {
    //two of each creature
    this.defaults.push(new Fish());
    this.defaults.push(new Jelly());
    this.defaults.push(new Crab());
    this.defaults.push(new Fish());
    this.defaults.push(new Jelly());
    this.defaults.push(new Crab());

    //Green fish
    this.defaults[0].position.set(0, 0);
    this.defaults[0].color = [0, 128, 0];
    this.defaults[0].points.push(new p5.Vector(-20, -17));
    this.defaults[0].points.push(new p5.Vector(-18, -15));
    this.defaults[0].points.push(new p5.Vector(-15, 0));
    this.defaults[0].points.push(new p5.Vector(-18, 15));
    this.defaults[0].points.push(new p5.Vector(-20, 17));
    this.defaults[0].points.push(new p5.Vector(-14, 10));
    this.defaults[0].points.push(new p5.Vector(-8, 0));
    this.defaults[0].points.push(new p5.Vector(0, -16));
    this.defaults[0].points.push(new p5.Vector(12, -16));
    this.defaults[0].points.push(new p5.Vector(25, 0));
    this.defaults[0].points.push(new p5.Vector(12, 16));
    this.defaults[0].points.push(new p5.Vector(0, 16));
    this.defaults[0].points.push(new p5.Vector(-8, 0));
    this.defaults[0].points.push(new p5.Vector(-14, -10));
    this.defaults[0].done = 1; //subdivide

    //pink jelly
    this.defaults[1].position.set(0, 0);
    this.defaults[1].color = [238, 130, 238];
    this.defaults[1].points.push(new p5.Vector(0, -25));
    this.defaults[1].points.push(new p5.Vector(-20, -15));
    this.defaults[1].points.push(new p5.Vector(-22, -10));
    this.defaults[1].points.push(new p5.Vector(-18, -10));
    this.defaults[1].points.push(new p5.Vector(-16, 0));
    this.defaults[1].points.push(new p5.Vector(-18, 25));
    this.defaults[1].points.push(new p5.Vector(-13, 0));
    this.defaults[1].points.push(new p5.Vector(-15, -9));
    this.defaults[1].points.push(new p5.Vector(-7, -8));
    this.defaults[1].points.push(new p5.Vector(-7, -8));
    this.defaults[1].points.push(new p5.Vector(-5, 5));
    this.defaults[1].points.push(new p5.Vector(-9, 30));
    this.defaults[1].points.push(new p5.Vector(-2, 8));
    this.defaults[1].points.push(new p5.Vector(-5, -7));
    this.defaults[1].points.push(new p5.Vector(0, -7));
    this.defaults[1].points.push(new p5.Vector(5, -7));
    this.defaults[1].points.push(new p5.Vector(2, 8));
    this.defaults[1].points.push(new p5.Vector(8, 30));
    this.defaults[1].points.push(new p5.Vector(5, 5));
    this.defaults[1].points.push(new p5.Vector(7, -8));
    this.defaults[1].points.push(new p5.Vector(7, -8));
    this.defaults[1].points.push(new p5.Vector(15, -9));
    this.defaults[1].points.push(new p5.Vector(13, 0));
    this.defaults[1].points.push(new p5.Vector(18, 25));
    this.defaults[1].points.push(new p5.Vector(16, 0));
    this.defaults[1].points.push(new p5.Vector(18, -10));
    this.defaults[1].points.push(new p5.Vector(22, -10));
    this.defaults[1].points.push(new p5.Vector(20, -15));
    this.defaults[1].done = 1; //subdivide

    //red crab
    this.defaults[2].position.set(0, 0);
    this.defaults[2].color = [255, 0, 0];
    this.defaults[2].points.push(new p5.Vector(6, -8));
    this.defaults[2].points.push(new p5.Vector(6, -3));
    this.defaults[2].points.push(new p5.Vector(7, 2));
    this.defaults[2].points.push(new p5.Vector(12, 3));
    this.defaults[2].points.push(new p5.Vector(15, 1));
    this.defaults[2].points.push(new p5.Vector(15, -3));
    this.defaults[2].points.push(new p5.Vector(11, -5));
    this.defaults[2].points.push(new p5.Vector(11, -10));
    this.defaults[2].points.push(new p5.Vector(17, -14));
    this.defaults[2].points.push(new p5.Vector(16, -9));
    this.defaults[2].points.push(new p5.Vector(17, -5));
    this.defaults[2].points.push(new p5.Vector(20, -8));
    this.defaults[2].points.push(new p5.Vector(20, -13));
    this.defaults[2].points.push(new p5.Vector(25, -10));
    this.defaults[2].points.push(new p5.Vector(24, -4));
    this.defaults[2].points.push(new p5.Vector(19, -3));
    this.defaults[2].points.push(new p5.Vector(18, 2));
    this.defaults[2].points.push(new p5.Vector(15, 6));
    this.defaults[2].points.push(new p5.Vector(18, 9));
    this.defaults[2].points.push(new p5.Vector(15, 13));
    this.defaults[2].points.push(new p5.Vector(18, 17));
    this.defaults[2].points.push(new p5.Vector(15, 22));
    this.defaults[2].points.push(new p5.Vector(15, 18));
    this.defaults[2].points.push(new p5.Vector(10, 14));
    this.defaults[2].points.push(new p5.Vector(12, 19));
    this.defaults[2].points.push(new p5.Vector(10, 22));
    this.defaults[2].points.push(new p5.Vector(10, 19));
    this.defaults[2].points.push(new p5.Vector(7, 15));
    this.defaults[2].points.push(new p5.Vector(0, 16));
    this.defaults[2].points.push(new p5.Vector(-7, 15));
    this.defaults[2].points.push(new p5.Vector(-10, 19));
    this.defaults[2].points.push(new p5.Vector(-10, 22));
    this.defaults[2].points.push(new p5.Vector(-12, 19));
    this.defaults[2].points.push(new p5.Vector(-10, 14));
    this.defaults[2].points.push(new p5.Vector(-15, 18));
    this.defaults[2].points.push(new p5.Vector(-15, 22));
    this.defaults[2].points.push(new p5.Vector(-18, 17));
    this.defaults[2].points.push(new p5.Vector(-15, 13));
    this.defaults[2].points.push(new p5.Vector(-18, 9));
    this.defaults[2].points.push(new p5.Vector(-15, 6));
    this.defaults[2].points.push(new p5.Vector(-18, 2));
    this.defaults[2].points.push(new p5.Vector(-19, -3));
    this.defaults[2].points.push(new p5.Vector(-24, -4));
    this.defaults[2].points.push(new p5.Vector(-25, -10));
    this.defaults[2].points.push(new p5.Vector(-20, -13));
    this.defaults[2].points.push(new p5.Vector(-20, -8));
    this.defaults[2].points.push(new p5.Vector(-17, -5));
    this.defaults[2].points.push(new p5.Vector(-16, -9));
    this.defaults[2].points.push(new p5.Vector(-17, -14));
    this.defaults[2].points.push(new p5.Vector(-11, -10));
    this.defaults[2].points.push(new p5.Vector(-11, -5));
    this.defaults[2].points.push(new p5.Vector(-15, -3));
    this.defaults[2].points.push(new p5.Vector(-15, 1));
    this.defaults[2].points.push(new p5.Vector(-12, 3));
    this.defaults[2].points.push(new p5.Vector(-7, 2));
    this.defaults[2].points.push(new p5.Vector(-6, -3));
    this.defaults[2].points.push(new p5.Vector(-6, -8));
    this.defaults[2].points.push(new p5.Vector(-3, -6));
    this.defaults[2].points.push(new p5.Vector(-3, 2));
    this.defaults[2].points.push(new p5.Vector(0, 2));
    this.defaults[2].points.push(new p5.Vector(3, 2));
    this.defaults[2].points.push(new p5.Vector(3, -6));
    this.defaults[2].done = 1; //subdivide

    //purple fish
    this.defaults[3].position.set(0, 0);
    this.defaults[3].color = [75, 0, 130];
    this.defaults[3].points.push(new p5.Vector(-20, -17));
    this.defaults[3].points.push(new p5.Vector(-18, -15));
    this.defaults[3].points.push(new p5.Vector(-15, 0));
    this.defaults[3].points.push(new p5.Vector(-18, 15));
    this.defaults[3].points.push(new p5.Vector(-20, 17));
    this.defaults[3].points.push(new p5.Vector(-14, 10));
    this.defaults[3].points.push(new p5.Vector(-8, 0));
    this.defaults[3].points.push(new p5.Vector(0, -16));
    this.defaults[3].points.push(new p5.Vector(12, -16));
    this.defaults[3].points.push(new p5.Vector(25, 0));
    this.defaults[3].points.push(new p5.Vector(12, 16));
    this.defaults[3].points.push(new p5.Vector(0, 16));
    this.defaults[3].points.push(new p5.Vector(-8, 0));
    this.defaults[3].points.push(new p5.Vector(-14, -10));
    this.defaults[3].done = 1; //subdivide

    //Yellow jelly
    this.defaults[4].position.set(0, 0);
    this.defaults[4].color = [255, 255, 0];
    this.defaults[4].points.push(new p5.Vector(0, -25));
    this.defaults[4].points.push(new p5.Vector(-20, -15));
    this.defaults[4].points.push(new p5.Vector(-22, -10));
    this.defaults[4].points.push(new p5.Vector(-18, -10));
    this.defaults[4].points.push(new p5.Vector(-16, 0));
    this.defaults[4].points.push(new p5.Vector(-18, 25));
    this.defaults[4].points.push(new p5.Vector(-13, 0));
    this.defaults[4].points.push(new p5.Vector(-15, -9));
    this.defaults[4].points.push(new p5.Vector(-7, -8));
    this.defaults[4].points.push(new p5.Vector(-7, -8));
    this.defaults[4].points.push(new p5.Vector(-5, 5));
    this.defaults[4].points.push(new p5.Vector(-9, 30));
    this.defaults[4].points.push(new p5.Vector(-2, 8));
    this.defaults[4].points.push(new p5.Vector(-5, -7));
    this.defaults[4].points.push(new p5.Vector(0, -7));
    this.defaults[4].points.push(new p5.Vector(5, -7));
    this.defaults[4].points.push(new p5.Vector(2, 8));
    this.defaults[4].points.push(new p5.Vector(8, 30));
    this.defaults[4].points.push(new p5.Vector(5, 5));
    this.defaults[4].points.push(new p5.Vector(7, -8));
    this.defaults[4].points.push(new p5.Vector(7, -8));
    this.defaults[4].points.push(new p5.Vector(15, -9));
    this.defaults[4].points.push(new p5.Vector(13, 0));
    this.defaults[4].points.push(new p5.Vector(18, 25));
    this.defaults[4].points.push(new p5.Vector(16, 0));
    this.defaults[4].points.push(new p5.Vector(18, -10));
    this.defaults[4].points.push(new p5.Vector(22, -10));
    this.defaults[4].points.push(new p5.Vector(20, -15));
    this.defaults[4].done = 1; //subdivide

    //orange crab
    this.defaults[5].position.set(0, 0);
    this.defaults[5].color = [255, 165, 0];
    this.defaults[5].points.push(new p5.Vector(6, -8));
    this.defaults[5].points.push(new p5.Vector(6, -3));
    this.defaults[5].points.push(new p5.Vector(7, 2));
    this.defaults[5].points.push(new p5.Vector(12, 3));
    this.defaults[5].points.push(new p5.Vector(15, 1));
    this.defaults[5].points.push(new p5.Vector(15, -3));
    this.defaults[5].points.push(new p5.Vector(11, -5));
    this.defaults[5].points.push(new p5.Vector(11, -10));
    this.defaults[5].points.push(new p5.Vector(17, -14));
    this.defaults[5].points.push(new p5.Vector(16, -9));
    this.defaults[5].points.push(new p5.Vector(17, -5));
    this.defaults[5].points.push(new p5.Vector(20, -8));
    this.defaults[5].points.push(new p5.Vector(20, -13));
    this.defaults[5].points.push(new p5.Vector(25, -10));
    this.defaults[5].points.push(new p5.Vector(24, -4));
    this.defaults[5].points.push(new p5.Vector(19, -3));
    this.defaults[5].points.push(new p5.Vector(18, 2));
    this.defaults[5].points.push(new p5.Vector(15, 6));
    this.defaults[5].points.push(new p5.Vector(18, 9));
    this.defaults[5].points.push(new p5.Vector(15, 13));
    this.defaults[5].points.push(new p5.Vector(18, 17));
    this.defaults[5].points.push(new p5.Vector(15, 22));
    this.defaults[5].points.push(new p5.Vector(15, 18));
    this.defaults[5].points.push(new p5.Vector(10, 14));
    this.defaults[5].points.push(new p5.Vector(12, 19));
    this.defaults[5].points.push(new p5.Vector(10, 22));
    this.defaults[5].points.push(new p5.Vector(10, 19));
    this.defaults[5].points.push(new p5.Vector(7, 15));
    this.defaults[5].points.push(new p5.Vector(0, 16));
    this.defaults[5].points.push(new p5.Vector(-7, 15));
    this.defaults[5].points.push(new p5.Vector(-10, 19));
    this.defaults[5].points.push(new p5.Vector(-10, 22));
    this.defaults[5].points.push(new p5.Vector(-12, 19));
    this.defaults[5].points.push(new p5.Vector(-10, 14));
    this.defaults[5].points.push(new p5.Vector(-15, 18));
    this.defaults[5].points.push(new p5.Vector(-15, 22));
    this.defaults[5].points.push(new p5.Vector(-18, 17));
    this.defaults[5].points.push(new p5.Vector(-15, 13));
    this.defaults[5].points.push(new p5.Vector(-18, 9));
    this.defaults[5].points.push(new p5.Vector(-15, 6));
    this.defaults[5].points.push(new p5.Vector(-18, 2));
    this.defaults[5].points.push(new p5.Vector(-19, -3));
    this.defaults[5].points.push(new p5.Vector(-24, -4));
    this.defaults[5].points.push(new p5.Vector(-25, -10));
    this.defaults[5].points.push(new p5.Vector(-20, -13));
    this.defaults[5].points.push(new p5.Vector(-20, -8));
    this.defaults[5].points.push(new p5.Vector(-17, -5));
    this.defaults[5].points.push(new p5.Vector(-16, -9));
    this.defaults[5].points.push(new p5.Vector(-17, -14));
    this.defaults[5].points.push(new p5.Vector(-11, -10));
    this.defaults[5].points.push(new p5.Vector(-11, -5));
    this.defaults[5].points.push(new p5.Vector(-15, -3));
    this.defaults[5].points.push(new p5.Vector(-15, 1));
    this.defaults[5].points.push(new p5.Vector(-12, 3));
    this.defaults[5].points.push(new p5.Vector(-7, 2));
    this.defaults[5].points.push(new p5.Vector(-6, -3));
    this.defaults[5].points.push(new p5.Vector(-6, -8));
    this.defaults[5].points.push(new p5.Vector(-3, -6));
    this.defaults[5].points.push(new p5.Vector(-3, 2));
    this.defaults[5].points.push(new p5.Vector(0, 2));
    this.defaults[5].points.push(new p5.Vector(3, 2));
    this.defaults[5].points.push(new p5.Vector(3, -6));
    this.defaults[5].done = 1; //subdivide
  }

  constructor() {
    //set to drawing state
    this.state = 0;
    //this.creationPhase = 0;

    //prepare for sea creatures
    this.SeaCreatures = [];
    //prepare to the rock
    this.Rock = new Rock(350, 300);
    //prepare for seaweed
    this.Seaweed = [];

    //current creature type
    this.CreatureType = 0; // 0 = Fish, 1 = Jelly, 2 = Crab, 3 = Random

    //default creatures
    this.defaults = [];
    //set default creatures
    this.setDefaults();
  }

  //draw and execute aquarium environment
  enviroment() {
    this.Rock.draw();
    this.Rock.checkTouched();
    this.Rock.bubble();
    this.drawKelp();
    this.drawCreatures();
  }

  //generates 10 seaweed along bottom of frame
  generateKelp() {
    for (var k = 0; k < 10; k++) {
      var posX = random(0, 400);
      var num = floor(random(1, 4));
      for (var s = 0; s < num; s++) {
        this.Seaweed.push(new Kelp(posX, 400));
      }
    }
  }

  //draws all the kelp at bottom of the frame
  drawKelp() {
    for (var d = 0; d < this.Seaweed.length; d++) {
      this.Seaweed[d].draw();
    }
  }

  //draws and moves all creatures in the frame
  drawCreatures() {
    for (var i = 0; i < Sim.SeaCreatures.length; i++) {
      Sim.SeaCreatures[i].draw();
      Sim.SeaCreatures[i].move();
    }
  }

  //creature creation process UI and creature drawing:
  createCreatures() {
    push();

    rect(0, 0, 400, 400);

    //Draw Creature Selection Boxes:
    //Fish Selector:
    if (this.CreatureType == 0)
      //If selected, highlight box
      strokeWeight(3);
    else strokeWeight(1);
    rect(10, 100, 55, 55);
    push();
    translate(37.5, 127.5);
    this.defaults[3].draw();
    this.defaults[0].draw();
    pop();

    //Jelly Selector:
    if (this.CreatureType == 1)
      //If selected, highlight box
      strokeWeight(3);
    else strokeWeight(1);
    rect(10, 168, 55, 55);
    push();
    translate(37.5, 195.5);
    this.defaults[4].draw();
    this.defaults[1].draw();
    pop();

    //Crab Selector:
    if (this.CreatureType == 2)
      //If selected, highlight box
      strokeWeight(3);
    else strokeWeight(1);
    rect(10, 236, 55, 55);
    push();
    translate(37.5, 263.5);
    this.defaults[5].draw();
    this.defaults[2].draw();
    pop();

    //Random Selector:
    if (this.CreatureType == 3)
      //If selected, highlight box
      strokeWeight(3);
    else strokeWeight(1);
    rect(10, 305, 55, 55);
    push();
    translate(37.5, 332.5);
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(50);
    text("?", 0, 5);
    pop();

    strokeWeight(1);

    //Draw color boxes: (Red, Orange, Yellow, Green, Blue, Purple, Pink)
    push();
    translate(25, 0);
    fill(255, 0, 0);
    rect(50, 60, 30, 30);
    fill(255, 165, 0);
    rect(95, 60, 30, 30);
    fill(255, 255, 0);
    rect(140, 60, 30, 30);
    fill(0, 128, 0);
    rect(185, 60, 30, 30);
    fill(0, 0, 255);
    rect(230, 60, 30, 30);
    fill(75, 0, 130);
    rect(275, 60, 30, 30);
    fill(238, 130, 238);
    rect(320, 60, 30, 30);
    pop();

    //Drawing canvas
    translate(225, 230); //DRAWING CENTER!!!
    fill(114, 237, 255);
    rect(-150, -130, 300, 260);

    //draw selected creature shadow on canvas
    push();
    noStroke();
    if (Sim.CreatureType != 3) {
      //if a default creature
      scale(5); //increase size
      this.defaults[Sim.CreatureType].color.push(50); //make transparent
      this.defaults[Sim.CreatureType].draw(); //draw the creature type
      this.defaults[Sim.CreatureType].color.splice(3, 1); //remove transparency
    } else {
      //if random
      fill(0, 0, 0, 50);
      textAlign(CENTER, CENTER);
      textStyle(BOLD);
      textSize(300);
      text("?", 0, 25);
    }
    pop();

    push();
    //draw number of creatures drawn in top right of canvas
    translate(145, -110);
    noStroke();
    fill(0);
    textSize(20);
    var number = this.SeaCreatures.length.toString() + "/6";
    textAlign(RIGHT);
    text(number, 0, 0);
    pop();

    pop();

    //draw instructions:
    push();
    translate(0, 8);
    noStroke();
    fill(0);
    var size = 12;
    textAlign(CENTER);
    textSize(size);
    textLeading(size);
    text(
      "Click in frame to draw sea creatures. Complete drawing loop and click 'Set Creature' to lock in design. You can change color and creature type before setting creature. Click 'Default' to use default creatures.",
      0,
      0,
      400
    );
    stroke(0);
    line(0, size * 3 + 8, 400, size * 3 + 8);
    pop();

    //draw Reset button
    push();
    translate(75, 385);
    fill(0, 150, 0);
    stroke(0);
    rect(0, -16, 50, 20);
    noStroke();
    fill(255);
    size = 18;
    textAlign(LEFT);
    textSize(size);
    text("Reset", 1, 0);

    //draw Set Creature button
    translate(150, 0);
    fill(0, 150, 0);
    if (Sim.SeaCreatures[Sim.SeaCreatures.length - 1].done == 0) {
      fill(150);
    }
    stroke(0);
    rect(-55, -16, 110, 20);
    noStroke();
    fill(255);
    textAlign(CENTER);
    text("Set Creature", 0, 0);

    //draw Default button
    translate(150, 0);
    fill(0, 150, 0);
    stroke(0);
    rect(0, -16, -60, 20);
    noStroke();
    fill(255);
    size = 18;
    textAlign(RIGHT);
    textSize(size);
    text("Default", -2, 0);

    pop();

    //DRAW SEA CREATURE BEING CREATED IN CANVAS!!!
    this.SeaCreatures[this.SeaCreatures.length - 1].draw();
  }
}
