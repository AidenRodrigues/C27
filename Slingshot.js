class Slingshot{
    constructor(bodyX, bodyY){
        var options = {
            bodyA:bodyX,
            bodyB:bodyY,
            stiffness:0.05,
            length:10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display(){
       var pointA = this.Slingshot.bodyA.position
       var pointB = this.Slingshot.bodyB.position
       strokeWeight(5)
       line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}