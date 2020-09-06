var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
/*for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    division[k].display();
  }*/

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  plinko = new Plinko(50,50,10);
  

  
  ground = new Ground(100,height,1200,20);
  division = new Divisions(1,650,5,300);
  division2 = new Divisions(80,650,5,300);
  division3 = new Divisions(159,650,5,300);
  division4 = new Divisions(238,650,5,300);
  division5 = new Divisions(317,650,5,300);
  division6 = new Divisions(396,650,5,300);
  division7 = new Divisions(478,650,5,300);
}


function draw() {
  background(0);  
  ground.display();
  plinko.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  
  drawSprites();
}