speed = 0;
class Pipe{
    constructor(x , y , w , h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        let options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h , options);
        World.add(world , this.body);
    };
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        fill('lightgreen');
        rect(0 , 0 , this.w , this.h);
        speed+=0.01;
        pos.x-=speed
        pop();
    };
    reset(){
        if(this.body.position.x<-30){
            Matter.Body.setPosition(this.body , {x:this.x , y:random(0 , -100)});
            
        }
    }
}