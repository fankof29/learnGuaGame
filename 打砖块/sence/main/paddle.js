


class paddle extends guaImage {
    constructor(game,name){
        super(game,name)
        this.x = 100
        this.y = 250
        this.speed = 20
    }
    move(x){
        if(x < 0){
            x = 0;
        }
        if(x > (400-this.w)) {
            x = 400-this.w
        }
        this.x = x;
    }
    moveLeft(){
        this.move(this.x -= this.speed)
    }
    moveRight(){
        this.move( this.x += this.speed)
    }
    collide(){
        let ball = this.sence.ball
        if (ball.y + ball.h > this.y) {
            if (ball.x > this.x && ball.x < this.x + this.w) {
                log('相撞')
                return true
            }
        }
        return false
    }
    update(){
        super.update()
        if(this.collide()){
            this.sence.ball.反弹()
        }
    }
}