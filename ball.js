class Ball {
    constructor(){
        this.diameter = null;
        this.x = null;
        this.y = null;
        this.trajectory = [];
        this.shapeColor = null;
    }

    display() {
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
    }
}