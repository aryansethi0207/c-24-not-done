class Rubber {
    constructor(x,y){
        var options={
    'density':1,
    'friction':5,
    'restitution':0.3
    };
    this.x=x;
    this.y=y;
  
    this.body=Bodies.circle(this.x,this.y,options)
    World.add(world,this.body)
    };
    display(){
        var rubberpos=this.body.position;
        push();
        translate(rubberpos.x,rubberpos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('black');
        fill("brown");
        ellipse(0,0,this.x,this.y);
        pop();
        }
        }