class Ball extends guaImage {
  constructor(game, name) {
    super(game, name)
    this.x = 100
    this.y = 240
    this.speedX = 10
    this.speedY = 10
    this.fire = false
  }
  move() {
    if (this.fired) {
      if (this.x < 0 || this.x > 400) {
        this.speedX = -this.speedX
      }
      if (this.y < 0 || this.y > 300) {
        this.speedY = -this.speedY;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  tofire() {
    this.fired = true;
  }
  反弹 () {
    this.speedY *= -1
  }
  hasPoint(x, y) {
    var hasX = x >= this.x && x <= this.x + this.w;
    var hasY = y >= this.y && x <= this.y + this.h;
    return hasX && hasY;
  }
  update(){
    super.update()
    this.move()
  }
}