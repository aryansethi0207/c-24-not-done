class Sand {
    constructor(x,y){
        var options={
    'density':1,
    'friction':5,
    'restitution':0.3
    };
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,options)
    World.add(world,this.body)
    };
    display(){
        var sandpos=this.body.position;
        push();
        translate(sandpos.x,sandpos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('black');
        fill("red");
        ellipse(0,0,this.x,this.y);
        pop();
        }
        }