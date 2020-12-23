class Particle{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {isStatic : false, restitution : 0.5});
        this.radius = 10;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(myWorld, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        push();
    }

}