const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
let bird;
let gs = 1;
let topPipe;
let downPipe;
let gap = 100;


function preload() {

}

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(50, 30, 40);
    topPipe = new Pipe(700, 0, 30, 500);
}

function draw() {
    background('lightblue');
    Engine.update(engine);
    fill('lightgreen');
    rect(0, 680, 800, 20);

    if (bird.body.position.y > 680) {
        bird.die();
       

    }

    bird.display();
    topPipe.display();
    topPipe.reset();


    if (bird.body.position.y < (topPipe.body.position.y + 300) && topPipe.body.position.x<(bird.body.position.x+50)) {
        bird.die();

    }




}

function keyPressed() {
    if (keyCode == 32) {
        bird.jump();
    }
    if (keyCode == 32 && gs === 0) {
        bird.respawn();
        gs = 1;
    }
}

