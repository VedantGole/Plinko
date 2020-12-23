class Plinko{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {isStatic : true});
        this.radius = 10;
        World.add(myWorld, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        push();
    }

}