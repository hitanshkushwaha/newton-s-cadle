class Roof {
    constructor(x,y,width,height){
       


        this.body=Bodies.rectangle(x,y,height,width,{isStatic:true})
        this.width=width
        this.height=height
        World.add(world,this.body)

        
    }
    display(){
        push();
        fill("grey")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.height,this.width)
        pop();
    }

}