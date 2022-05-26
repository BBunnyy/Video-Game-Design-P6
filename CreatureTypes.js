/*
  This file defines various sea creature types!
  Three Sea Creature types: Fish, Jellyfish, Crab
  Each creature had different movement behavior!
*/

//Fish Creature Class:
class Fish extends SeaCreature {
  //Extra constructor data needed for fish behavior:
  xtra() {
    //reset velocity from default
    this.velocity.set(0, 0);
    this.xScale = 0.5; //xScale is used for the force that the fish is moved in the x direction
    this.yScale = 0.3; //yScale is used for the force that the fish is moved in the y direction

    this.lastFrameX = frameCount; //used to determine duration of wandering in x dir
    this.lastFrameY = frameCount; //used to determine duration of wandering in y dir

    this.directionX = 1; // -1, 1 (Left, Right)
    this.directionY = -1; // -1, 1 (Up, Down)

    this.durationX = 0; //Time of a wander action before changing direction
    this.durationY = 0; //Time of a wander action before changing direction

    //An array that smooths the velocity to appear more natural in x and y direction, max speed will be x/yScale
    this.velocitySmoothX = new Array(50);
    for (var i = 0; i < this.velocitySmoothX.length; i++) {
      this.velocitySmoothX[i] = this.directionX;
    }
    this.velocitySmoothY = new Array(50); //20 values
    for (var i = 0; i < this.velocitySmoothY.length; i++) {
      this.velocitySmoothY[i] = this.directionY;
    }
  }

  move() {
    //If the duration of the action has passed, calculate a new direction and duration
    if (frameCount > this.lastFrameX + this.durationX) {
      //50% chance to...
      var temp = floor(random(0, 2));
      if (temp < 1) {
        this.directionX *= -1; //change direction
      }
      this.durationX = random(2, 4) * 60; // Random duration of movement from 2-4 seconds
      this.lastFrameX = frameCount;
    }

    //If the duration of the action has passed, calculate a new direction and duration
    if (frameCount > this.lastFrameY + this.durationY) {
      //50% chance to...
      var temp1 = floor(random(0, 2));
      if (temp1 < 1) {
        this.directionY *= -1; //change direction
      }
      this.durationY = random(2, 4) * 60; // Random duration from 2-4 seconds
      this.lastFrameY = frameCount;
    }

    //Move the enemy with the last determined velocity and then calculate new velocity!
    this.position.add(this.velocity);

    //reset the enemy's velocity
    this.velocity.set(0, 0);

    //If direction is left
    if (this.directionX == -1) {
      if (this.position.x < 50) {
        //if near left edge
        //begin turn right
        this.velocitySmoothX.push(this.xScale); //Slow the Fish
        this.directionX *= -1; //turn the fish
        this.lastFrameX = frameCount;
        this.durationX = 60 * random(4, 6); //move away from edge for 4 to 6 seconds
      } else {
        this.velocitySmoothX.push(-this.xScale); //move to the left
      }
    }
    //If direction is right
    else if (this.directionX == 1) {
      if (this.position.x > 350) {
        //if near right edge
        //begin turn left
        this.velocitySmoothX.push(-this.xScale); //Slow the Fish
        this.directionX *= -1; //turn the fish
        this.lastFrameX = frameCount;
        this.durationX = 60 * random(4, 6); //move away from edge for 4 to 6 seconds
      } else {
        this.velocitySmoothX.push(this.xScale); //accelerate to the right
      }
    }

    //If direction is left
    if (this.directionY == -1) {
      if (this.position.y < 20) {
        //if near top edge
        //begin turn right
        this.velocitySmoothX.push(this.yScale); //Slow the fish
        this.directionY *= -1; //turn the fish
        this.lastFrameY = frameCount;
        this.durationY = 60 * random(4, 6); //move away from edge for 4 to 6 seconds
      } else {
        this.velocitySmoothY.push(-this.yScale); //accelerate to the left
      }
    }
    //If direction is right
    else if (this.directionY == 1) {
      if (this.position.y > 380) {
        //if near bottom edge
        //begin turn left
        this.velocitySmoothY.push(-this.yScale); //Slow the fish
        this.directionY *= -1; //turn the fish
        this.lastFrameY = frameCount;
        this.durationY = 60 * random(4, 6); //move away from edge for 4 to 6 seconds
      } else {
        this.velocitySmoothY.push(this.yScale); //accelerate to the right
      }
    }

    //remove the first element from the velocity smoother, to keep length consistent
    this.velocitySmoothX.splice(0, 1);
    //remove the first element from the velocity smoother, to keep length consistent
    this.velocitySmoothY.splice(0, 1);

    //Calculate the smoothed velocity in X dir(average of velocity smoother array)
    for (var k = 0; k < this.velocitySmoothX.length; k++) {
      this.velocity.x += this.velocitySmoothX[k];
    }
    this.velocity.x /= this.velocitySmoothX.length;
    //Calculate the smoothed velocity in Y dir(average of velocity smoother array)
    for (var k = 0; k < this.velocitySmoothY.length; k++) {
      this.velocity.y += this.velocitySmoothY[k];
    }
    this.velocity.y /= this.velocitySmoothY.length;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

//Jellyfish Creature Class:
class Jelly extends SeaCreature {
  //xtra constructor needed for jelly behavior
  xtra() {
    this.velocity.set(0, 0); //reset velocity

    //Jellies bob up and down and travel (oscillate) left and right
    this.bobCount = random(0, 2 * PI);
    this.wiggleCount = random(0, 2 * PI);

    this.firstMove = false; //have not moved yet
    this.origPos = new p5.Vector(0, 0); //original position to move around
  }

  move() {
    //if movement has been called the first time
    if (this.firstMove == false) {
      this.firstMove = true;
      this.origPos.set(this.position); //capture starting position
    }
    //current position oscillates up/down around original spot
    this.position.y = this.origPos.y + 10 * cos(this.bobCount);
    this.position.x = this.origPos.x + 75 * cos(this.wiggleCount);

    //rate at which oscillates (increment)
    this.bobCount += 0.03;
    this.wiggleCount += 0.005;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

//Crab Creature Class:
class Crab extends SeaCreature {
  //extra constructor for crab behavior
  xtra() {
    this.velocity.set(0, 0); //reset velocity

    this.lastFrame = frameCount; //used to determine duration of wandering

    this.direction = 1; // -1, 0, 1 (Left, Center, Right)
    this.duration = 0; //Length of a wander action before changing direction

    //smooths velocity to appear more natural!
    this.velocitySmooth = new Array(50);
    for (var i = 0; i < this.velocitySmooth.length; i++) {
      this.velocitySmooth[i] = this.direction;
    }

    //marks if move has been called yet
    this.firstMove = false;
  }

  move() {
    //if move hasn't been called yet
    if (this.firstMove == false) {
      this.firstMove = true;
      this.position.y = height - this.height / 2; //move crabs to ground level
    }
    //If the duration of the action has passed, calculate a new direction and duration
    if (this.lastFrame < frameCount - this.duration) {
      this.direction = floor(random(0, 3)) - 1; //random direction (-1, 0, 1) / (left,center,right)
      this.duration = random(1, 3) * 60; // Random duration from 1-3 seconds
      this.lastFrame = frameCount;
    }

    //Move the enemy with the last determined velocity
    this.position.add(this.velocity.mult(0.7));

    //reset the enemy's velocity
    this.velocity.x = 0;

    //If direction is left
    if (this.direction == -1) {
      if (this.position.x < 50) {
        //If near left edge
        this.velocitySmooth.push(0); //Slow the Crab
      } else {
        this.velocitySmooth.push(-1); //accelerate to the left
      }
    }
    //If direction is middle
    else if (this.direction == 0) {
      this.velocitySmooth.push(0); //slow the crab
    }
    //If direction is right
    else if (this.direction == 1) {
      if (this.position.x > 350) {
        //if near right edge
        this.velocitySmooth.push(0); //Slow the Crab
      } else {
        this.velocitySmooth.push(1); //accelerate to the right
      }
    }

    //remove the first element from the velocity smoother, to keep length consistent
    this.velocitySmooth.splice(0, 1);

    //Calculate the smoothed velocity (average of velocity smoother array)
    for (var k = 0; k < this.velocitySmooth.length; k++) {
      this.velocity.x += this.velocitySmooth[k];
    }
    this.velocity.x /= this.velocitySmooth.length;
  }
}
