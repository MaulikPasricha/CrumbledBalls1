class Paper {
    constructor(x, y,radius){
    var options={
    
    restitution : 0.3,
    friction:0.5,
    density:1.2
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
    
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.radius, this.radius);
        pop()
    
   /* ellipseMode(RADIUS);
    fill("green");
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    */
    }
}