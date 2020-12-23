const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(240, 790, 480, 20);
  edges = new EdgeBodies();

  for(var v = 40; v <= width; v = v + 50){
    plinkos.push(new Plinko(v, 75, 10));
  }

  for(var e = 15; e <= width - 10; e = e + 50){
    plinkos.push(new Plinko(e, 175, 10));
  }

  for(var e = 40; e <= width - 10; e = e + 50){
    plinkos.push(new Plinko(e, 275, 10));
  }
  
  for(var e = 15; e <= width - 10; e = e + 50){
    plinkos.push(new Plinko(e, 375, 10));
  }

  

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divider(k, height - divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0); 
  Engine.update(myEngine); 
  drawSprites();
  
  for(var j = 0; j < divisions.length; j++){
  divisions[j].display();
  }

  for(var v = 0; v < plinkos.length; v++){
    plinkos[v].display();
    }

    for(var e = 0; e < plinkos.length; e++){
      plinkos[e].display();
    }
  
    for(var e = 0; e < plinkos.length; e++){
      plinkos[e].display();
    }

    for(var e = 0; e < plinkos.length; e++){
      plinkos[e].display();
    }

    for(var p = 0; p < particles.length; p++){
      particles[p].display();
    }

    if(frameCount % 60 == 0){
      particles.push(new Particle(random(230, 260 ), 10, 10));
    }

    
  ground.display();
  edges.display();
  

  //console.log(frameCount); 
}