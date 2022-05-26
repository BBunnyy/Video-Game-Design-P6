/* 
  Code that handles the creation, movement and drawing of individual Bubble Particles
*/

class Bubble {
  //Montecarlo Random Number Generator
  //Determines Bubble color, favors higher values in range (180,255)
  monteCarlo() {
    var v1 = random(180, 255);
    var v2 = random(180, 255);
    while (v2 > v1) {
      v1 = random(180, 255);
      v2 = random(180, 255);
    }
    return v1;
  }

  //Default Constructor:
  constructor(x, y) {
    //Bubble Movement Values:
    this.position = new p5.Vector(x + random(-5, 5), y + random(-5, 5)); //Random small starting position near spawn to appear more random
    this.velocity = new p5.Vector(random(-0.2, 0.2), -random(2, 3)); //Random speeds, slight movement in x dir to have bubbles spread
    this.resistance = new p5.Vector(0, 0.02);
    this.wobble = 0; //Count for bubbles to oscillate in x-direction

    //bubble parameters drawing, size and color
    this.size = random(5, 10);
    this.c1 = this.monteCarlo();
  }

  //Movement of Bubble
  move() {
    //
    if (this.velocity.y < -1) this.velocity.add(this.resistance);
    else this.velocity.y = -1;
    this.position.add(this.velocity);
    this.timeLeft--;
  }

  //Drawing of Bubble
  draw() {
    push();
    //give a blue outline for visibility
    stroke(150, 150, 255);
    fill(this.c1, this.c1, this.c1, 100); //fill with random whiteness (180, 255)
    //draw bubble, and ocilate position in x direction
    ellipse(
      this.position.x + 4 * cos(this.wobble),
      this.position.y,
      this.size,
      this.size
    );
    pop();

    //increment the wobble counter
    this.wobble += 0.05;
  }
}
