class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke("red")
            if (pointA.x < 220){
             strokeWeight(7);
             line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            }
            else{
            strokeWeight(3);
             line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            }
            
            pop()
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
}