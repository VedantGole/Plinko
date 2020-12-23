class EdgeBodies{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, {isStaic : true});
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);

    }
    display(){
        //var pos = this.body.position;                                                                                    
        push();
        rectMode(CENTER);
        fill("brown");
        rect(475, 400, 10, 800);
        rect(5, 400, 10, 800);
        rect(240, 795, 480, 10);
        rect(240, 5, 480, 10);
        pop();
    }
}