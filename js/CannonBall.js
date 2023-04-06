class CannonBall {
  constructor(x, y) {
    var options = {
     
      isStatic: true
    };

    World.add(world, this.body);
  }

  

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

    pop();

    }
  }

