/* 
  Base class for any sea creatures.
  Defines how to use subdivide the points added by the drawing
  defines a base movement behavior (bouncing off edges)
*/

class SeaCreature {
  //no extra parameters in base class
  xtra() {
    return false; //nothing in base
  }

  constructor() {
    //set color of the creature (red default)
    this.color = [255, 0, 0];

    //holds the points of the drawing, and temperary holding for subdivision
    this.points = [];
    this.t_points = [];
    //iterations of subdivisions
    this.iterations = 0;
    this.done = 0;

    //size of the creature
    this.width = 0;
    this.height = 0;

    //holds duration of movement
    this.duration = 0;

    //movement of creature
    this.position = new p5.Vector(225, 230);
    this.velocity = new p5.Vector(1, 0);

    //extra things to define if necessary
    this.xtra();
  }

  //splits the points of the drawing and add those points
  splitPoints() {
    this.t_points.splice(0, this.t_points.length); //clear temporary point hold

    //add points and middle of adjacent points as a new point in temporary points
    for (var i = 0; i < this.points.length - 1; i++) {
      this.t_points.push(new p5.Vector(this.points[i].x, this.points[i].y));
      this.t_points.push(
        new p5.Vector(
          (this.points[i].x + this.points[i + 1].x) / 2,
          (this.points[i].y + this.points[i + 1].y) / 2
        )
      );
    }
    this.t_points.push(new p5.Vector(this.points[i].x, this.points[i].y));
    this.t_points.push(
      new p5.Vector(
        (this.points[0].x + this.points[i].x) / 2,
        (this.points[0].y + this.points[i].y) / 2
      )
    );
  }

  average() {
    //average adjacent points
    for (var i = 0; i < this.t_points.length - 1; i++) {
      var x = (this.t_points[i].x + this.t_points[i + 1].x) / 2;
      var y = (this.t_points[i].y + this.t_points[i + 1].y) / 2;
      this.t_points[i].set(x, y);
    }
    var x = (this.t_points[i].x + this.points[0].x) / 2;
    var y = (this.t_points[i].y + this.points[0].y) / 2;

    this.points.splice(0, this.points.length); //clear original points
    //set original points equal to temporary points
    for (i = 0; i < this.t_points.length; i++) {
      this.points.push(new p5.Vector(this.t_points[i].x, this.t_points[i].y));
    }
  }

  //subdivide the object, repeat 5 times
  subdivide() {
    while (this.iterations < 5) {
      this.splitPoints();
      this.average();
      this.iterations++;
    }
  }

  //if you want extra manipulations to occur in drawing
  manipulate() {
    //if you want to stretch the image based on creature type
    return false;
  }

  draw() {
    push();
    //if the drawing is not done:
    if (this.done == 0) {
      //center in drawing canvas:
      translate(225, 230);
      //draw points
      for (var i = 0; i < this.points.length; i++) {
        fill(this.color);
        circle(this.points[i].x, this.points[i].y, 10);
      }

      //draw lines connecting points
      for (var i = 0; i < this.points.length - 1; i++) {
        line(
          this.points[i].x,
          this.points[i].y,
          this.points[i + 1].x,
          this.points[i + 1].y
        );
      }
      //if mouse is in canvas, draw line from last point to mouse
      if (
        this.points.length > 0 &&
        mouseX > 75 &&
        mouseX < 375 &&
        mouseY > 100 &&
        mouseY < 360
      ) {
        line(
          this.points[this.points.length - 1].x,
          this.points[this.points.length - 1].y,
          mouseX - 225,
          mouseY - 230
        );
      }
    } else {
      //if the image drawing is done
      this.subdivide(); // subdivide the drawing (only happens if iterations < 5)
      push();

      //move the image to its position
      translate(this.position.x, this.position.y);

      //if the creature moves left and sim is started, face left
      if (this.velocity.x < 0 && Sim.state == 1) {
        scale(-1, 1);
      }

      //extra manipulations to object
      this.manipulate();

      //draw the creature:
      fill(this.color);
      beginShape();
      for (var i = 0; i < this.points.length; i++) {
        vertex(this.points[i].x, this.points[i].y);
      }
      vertex(this.points[0].x, this.points[0].y);
      endShape();

      pop();
    }

    pop();
  }

  //movement base, bounce the creature off the walls
  move() {
    this.position.add(this.velocity);

    if (this.position.x < 0 || this.position.x > 400) {
      this.position.sub(this.velocity);
      this.position.x *= -1;
      this.position.add(this.velocity);
    } else if (this.position.y < 0 || this.position.y > 400) {
      this.position.sub(this.velocity);
      this.position.y *= -1;
      this.position.add(this.velocity);
    }
  }
}
