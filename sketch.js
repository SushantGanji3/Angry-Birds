const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, pig1, pig2, ground, log1, log2, log3, log4, bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1 = new pig(810,350);
    box2 = new Box(920,320,70,70);
    log1 = new Log(810,280,300,PI/2);

    box3 = new Box(700,250,70,70);
    pig2 = new pig(810,280);
    box4 = new Box(920,250,70,70);
    log2 = new Log(810,210,300,PI/2);

    box5 = new Box(810,180,70,70);
    log3 = new Log(740,180,150,PI/5);
    log4 = new Log(870,180,150,-(PI/5));

    bird1 = new Bird(300,300);

    ground = new Ground(600,390,1200,20);
    
    
    
        
}
function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();

    ground.display();
}