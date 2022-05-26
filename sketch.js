/*
MAIN SKETCH LOOP FOR THE UNDER WATER SIMULATION
Most of the data is handled in the Simulation.js file for the environment
Seperate files for multiple objects were used
*/
var Sim;

function setup() {
  createCanvas(400, 400);

  Sim = new Simulation();
  Sim.generateKelp();
  CreatureType = 0;
}

function draw() {
  background(114, 237, 255);

  if (Sim.state == 0) {
    if (Sim.SeaCreatures.length == 0) {
      Sim.SeaCreatures.push(new Fish());
    }
    Sim.createCreatures();
  } else if (Sim.state == 1) {
    Sim.enviroment();
  }
}
