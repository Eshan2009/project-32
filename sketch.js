const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var backgroundImg,platform;
var pentagon;
var slingShot;
var score = 0
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,300,20);
    ground2 = new Ground(1000,height - 300,300,20);

    box1 = new Box(550,580,70,70);
    box2 = new Box(650,580,70,70);
    box3 = new Box(700,660,70,70);
    box4 = new Box(600,510,70,70);
    box5 = new Box(600,660,70,70);
    box6 = new Box(500,660,70,70);
    box7 = new Box(950,280,70,70);
    box8 = new Box(1050,280,70,70);
    box9 = new Box(1100,360,70,70);
    box10 = new Box(1000,210,70,70);
    box11 = new Box(1000,360,70,70);
    box12 = new Box(900,360,70,70);
    
    pentagon = new Pentagon(300,460,30,30); 
    
    slingShot = new Slingshot(pentagon.body,{x:200, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    text("Score :"+ score, width-300, 50);
    box1.display();
    box2.display();
    ground1.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ground2.display();

    box9.display();
    box10.display();

    box11.display();
    box12.display();
    pentagon.display();
    slingShot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    
    
}


function mouseDragged(){
    Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY})

}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
        if (keyCode === 32){
            slingShot.attach(pentagon.body);
        }
}
  

