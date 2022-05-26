/* 
  Class to create and define parameters of individual seaweed leaves.
  Seaweed/Kelp has an origin and waves, anchroed at the origin
*/

class Kelp {
  //Constructor
  constructor(x, y) {
    //Set position
    this.x = x;
    this.y = y;
    //randomize a height of the seaweed
    this.height = -random(30, 50);

    //used to oscilate (wave) the seaweed at three different points
    this.wave1 = random(0, 2 * PI);
    this.wave2 = random(0, 2 * PI);
    this.wave3 = random(0, 2 * PI);
  }

  //draw seaweed, seaweed waves around more sporatically as it gets higher up the leaf
  draw() {
    push();
    translate(this.x, this.y);

    //draw seaweed body
    noFill();
    strokeWeight(10);
    stroke(0, 180, 0);
    bezier(
      0,
      0,
      8 * cos(this.wave1),
      this.height / 2,
      8 * cos(this.wave1) + 6 * cos(this.wave2),
      (this.height * 2) / 3,
      8 * cos(this.wave1) + 6 * cos(this.wave2) + 4 * cos(this.wave3),
      this.height
    );

    //draw center line
    strokeWeight(2);
    stroke(0, 100, 0);
    bezier(
      0,
      4,
      8 * cos(this.wave1),
      this.height / 2,
      8 * cos(this.wave1) + 6 * cos(this.wave2),
      (this.height * 2) / 3,
      8 * cos(this.wave1) + 6 * cos(this.wave2) + 4 * cos(this.wave3),
      this.height - 4
    );
    pop();

    //iterate by a random small ammount to make somewhat random movements
    this.wave1 += random(0.01, 0.02);
    this.wave2 += random(0.02, 0.03);
    this.wave3 += random(0.03, 0.04);
  }
}
