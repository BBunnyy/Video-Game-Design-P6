//function to determine what happens on user clicks

function mouseClicked() {
  //if in drawing state:
  if (Sim.state == 0) {
    //if the sea creature being drawn is not done:
    if (Sim.SeaCreatures[Sim.SeaCreatures.length - 1].done == 0) {
      //if there are 2 or more points, and the user clicks near the first point, complete creature drawing, otherwise, if the mouse is in the canvas, create a new point
      if (
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].points.length > 1 &&
        dist(
          Sim.SeaCreatures[Sim.SeaCreatures.length - 1].points[0].x,
          Sim.SeaCreatures[Sim.SeaCreatures.length - 1].points[0].y,
          mouseX - 225,
          mouseY - 230
        ) < 10
      ) {
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].done = 1;
      } else if (mouseX > 75 && mouseX < 375 && mouseY > 100 && mouseY < 360) {
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].points.push(
          new p5.Vector(mouseX - 225, mouseY - 230)
        );
      }
    } 
    
    //if in the drawing state
    if (Sim.state == 0) {
      
      //if the user clicks on one of the color options, change the creature color:
      if (mouseX > 75 && mouseX < 105 && mouseY > 60 && mouseY < 90) { //red
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [255, 0, 0]
      }
      else if (mouseX > 120 && mouseX < 150 && mouseY > 60 && mouseY < 90) { //orange
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [255, 165, 0]
      }
      else if (mouseX > 165 && mouseX < 195 && mouseY > 60 && mouseY < 90) { //yellow
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [255, 255, 0]
      }
      else if (mouseX > 210 && mouseX < 240 && mouseY > 60 && mouseY < 90) { // green
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [0, 128, 0]
      }
      else if (mouseX > 255 && mouseX < 285 && mouseY > 60 && mouseY < 90) { //blue
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [0, 0, 255]
      }
      else if (mouseX > 300 && mouseX < 330 && mouseY > 60 && mouseY < 90) { purple
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [75, 0, 130]
      }
      else if (mouseX > 345 && mouseX < 375 && mouseY > 60 && mouseY < 90) { pink
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].color = [238, 130, 238]
      }
      
      //if the user click the reset button, reset the creature parameters
      else if (mouseX > 75 && mouseX < 125 && mouseY > 369 && mouseY < 405) {
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].points = []
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].done = 0
        Sim.SeaCreatures[Sim.SeaCreatures.length - 1].iterations = 0
      }
      //if the user clicks the fish type, and it is not already a fish type, remove current creature, add fish creature
      else if (mouseX > 10 && mouseX < 65 && mouseY > 100 && mouseY < 155 && Sim.CreatureType != 0) {
        Sim.CreatureType = 0
        Sim.SeaCreatures.splice(Sim.SeaCreatures.length - 1, 1)
        Sim.SeaCreatures.push(new Fish())
      }
      //if the user clicks the jelly type, and it is not already a jelly type, remove current creature, add jelly creature
      else if (mouseX > 10 && mouseX < 65 && mouseY > 168 && mouseY < 223 && Sim.CreatureType != 1) {
        Sim.CreatureType = 1
        Sim.SeaCreatures.splice(Sim.SeaCreatures.length - 1, 1)
        Sim.SeaCreatures.push(new Jelly())
      }
      //if the user clicks the crab type, and it is not already a crab type, remove current creature, add crab creature
      else if (mouseX > 10 && mouseX < 65 && mouseY > 236 && mouseY < 291 && Sim.CreatureType != 2) {
        Sim.CreatureType = 2
        Sim.SeaCreatures.splice(Sim.SeaCreatures.length - 1, 1)
        Sim.SeaCreatures.push(new Crab())
      }
      //if the user clicks the random type, and it is not already a random type, remove current creature, add random creature
      else if (mouseX > 10 && mouseX < 65 && mouseY > 305 && mouseY < 360 && Sim.CreatureType != 3) {
        Sim.CreatureType = 3
        //pick a random creature:
        var randSea = floor(random(0,3))
        Sim.SeaCreatures.splice(Sim.SeaCreatures.length - 1, 1)
        if (randSea == 0) {
          Sim.SeaCreatures.push(new Fish())
        }
        if (randSea == 1) {
          Sim.SeaCreatures.push(new Jelly())
        }
        if (randSea == 2) {
          Sim.SeaCreatures.push(new Crab())
        }
      }
      //if the creature is done, and the user clicks set creature modify the creature size and finish setting parameters of the creature
      else if (mouseX > 170 && mouseX < 280 && mouseY > 369 && mouseY < 405 && Sim.SeaCreatures[Sim.SeaCreatures.length-1].done == 1) {
        //tracking smallest coordinates for size purposes , initialize to extremes to allow any value to be better than originals
        var maxX = -1000
        var minX = 1000;
        var maxY = -1000;
        var minY = 1000;
        
        //shrink every point towards center by a factor of 4
        for (var i = 0; i < Sim.SeaCreatures[Sim.SeaCreatures.length-1].points.length; i++) {
          Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].div(4);
          
          //if a min or max is found, track it
          if (Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].x > maxX) {
            maxX = Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].x
          }
          if (Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].x < minX) {
            minX = Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].x
          }
          if (Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].y > maxY) {
            maxY = Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].y
          }
          if (Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].y < minY) {
            minY = Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].y
          }
        }
        //set the width to be the distance from max to min in x and y directions
        Sim.SeaCreatures[Sim.SeaCreatures.length-1].width = maxX - minX
        Sim.SeaCreatures[Sim.SeaCreatures.length-1].height = maxY - minY
        
        //find center of creature, and move center to origin
        var centerX = new p5.Vector((maxX + minX)/2, (maxY + minY)/2)
        for (var i = 0; i < Sim.SeaCreatures[Sim.SeaCreatures.length-1].points.length; i++) {
          Sim.SeaCreatures[Sim.SeaCreatures.length-1].points[i].sub(centerX);
        }
        
        //set a random starting position of the creature
        Sim.SeaCreatures[Sim.SeaCreatures.length-1].position = new p5.Vector(random(100,300),random(100,300));
        
        //if you have not made 6 creatures yet, add another creature to draw,based on selected type:
        if (Sim.SeaCreatures.length < 6) {
          if (Sim.CreatureType == 0)
            Sim.SeaCreatures.push(new Fish())
          else if (Sim.CreatureType == 1)
            Sim.SeaCreatures.push(new Jelly())
          else if (Sim.CreatureType == 2)
            Sim.SeaCreatures.push(new Crab())
          else if (Sim.CreatureType == 3) {
            var temp = floor(random(0,3))
            if (temp == 0)
              Sim.SeaCreatures.push(new Fish())
            else if (temp == 1)
              Sim.SeaCreatures.push(new Jelly())
            else if (temp == 2)
              Sim.SeaCreatures.push(new Crab())
          }
        }
        //if 6 creatures have been drawn, move to aquarium simulation phase
        else {
          Sim.state = 1
        }
      }
      //if the user selects default button, initialize the default creatures to be centered at their origin, and give a random position. start the simulation
      else if (mouseX > 325 && mouseX < 375 && mouseY > 370 && mouseY < 390) {
        Sim.SeaCreatures = Sim.defaults
        Sim.state = 1
        
        for (var a = 0; a < Sim.SeaCreatures.length; a++) {
          var maxXD = -200
          var minXD = 200;
          var maxYD = -200;
          var minYD = 200;
          
          for (var iD = 0; iD < Sim.SeaCreatures[a].points.length; iD++) {
            if (Sim.SeaCreatures[a].points[iD].x > maxXD) {
              maxXD = Sim.SeaCreatures[a].points[iD].x
            }
            if (Sim.SeaCreatures[a].points[iD].x < minXD) {
              minXD = Sim.SeaCreatures[a].points[iD].x
            }
            if (Sim.SeaCreatures[a].points[iD].y > maxYD) {
              maxYD = Sim.SeaCreatures[a].points[iD].y
            }
            if (Sim.SeaCreatures[a].points[iD].y < minYD) {
              minYD = Sim.SeaCreatures[a].points[iD].y
            }
          }
          //print(maxXD, minXD)
          //print(Sim.SeaCreatures[a].points.length)
          Sim.SeaCreatures[a].width = maxXD - minXD
          Sim.SeaCreatures[a].height = maxYD - minYD

          //find center
          var centerXD = new p5.Vector((maxX + minXD)/2, (maxYD + minYD)/2)
          for (var iD = 0; iD < Sim.SeaCreatures[a].points.length; iD++) {
            Sim.SeaCreatures[a].points[iD].sub(centerXD);
          }
          Sim.SeaCreatures[a].position = new p5.Vector(random(100,300),random(100,300));
        }
      }
    }
  }
}