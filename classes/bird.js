

class Bird{
    constructor(radius , x , y ){
        let op = {
            isStatic:false
        }
        this.r = radius;
        this.x = x;
        this.y = y;
        this.Visiblity = 255;
       
        this.body = Matter.Bodies.circle(x , y , radius , op);
        World.add( world , this.body);
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        stroke = 'blue';
        fill('yellow');
        ellipse(0,0 , this.r , this.r);
        pop();
    }
    die(){
        World.remove(world , this.body);
        fill('red');
        textSize(20);
        text('BIRD DIED', 300, 300, 100, 70);
        textSize(12);
        text('press space to respawn', 300, 350, 100, 70);
        gs = 0;
    }
    jump(){
        Matter.Body.applyForce(this.body,this.body.position ,{x:0 , y:-0.3});
    }
    respawn(){
        World.add(world , this.body);
        Matter.Body.setPosition(this.body , {x:this.x , y:this.y});
    }
}