class Bird extends guaAnimation {
    constructor(game,name){
        super(game,name)
        this.x = 200
        this.y = 300
        this.speed = 8
        this.vy = 0
        this.gy = 10
        this.floot = 580
    }
    move() {
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > (400 - this.w)) {
            this.x = 400 - this.w
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > (700 - this.h)) {
            this.y = 700 - this.h
            
        }

    }
    moveUp() {
        this.rotation = -45
        this.vy = -this.speed
        this.move()
    }

    checkDead() {
        if(this.y == this.floot) {
            this.alive = false;
        }
        
    }
    checkPoint(e) {
        if (rectIntersects(this, e) || rectIntersects(e, this)) {
            this.alive = false
        }
    }
    checkCrash() {
        let pipes = this.sence.pipes.els;

        for(let i of pipes){
            this.checkPoint(i)
        }
    }
    update() {
        super.update()
        if(!window.start) {
            return
        }
        var h = this.floot
        this.y += this.vy
        this.vy += this.gy * 0.15
        if(this.y > h) {
            this.y = h
            this.rotation = 0
        }
        if(this.rotation < 45) {
            this.rotation += 3
        }
        this.checkDead()
        this.checkCrash()
    }

}