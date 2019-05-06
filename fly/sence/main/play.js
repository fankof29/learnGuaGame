class Play extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.speed = 10
        this.cooltime = 0;
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
    moveLeft() {
        this.x -= this.speed
        this.move()
    }
    moveRight() {
        this.x += this.speed
        this.move()
    }
    moveUp() {
        this.y -= this.speed
        this.move()
    }
    moveDown() {
        this.y += this.speed
        this.move()
    }
    update() {
        if (this.cooltime > 0) {
            this.cooltime--
        }
    }
    fire() {
        if (this.cooltime == 0) {
            this.cooltime = 5
            let x = this.w / 2 + this.x - 1
            let y = this.y - 10
            let bullet = Bullet.new(this.game, 'bullet')
            bullet.x = x
            bullet.y = y
            this.sence.addElements(bullet)
            log(this.sence)
        }

    }
}

class Enemy extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.x = randowBetween(0, 350)
        this.speed = randowBetween(3, 10)
    }
    setUp() {
        this.speed = randowBetween(3, 10)
        this.x = randowBetween(0, 350)
        this.y = -randowBetween(0, 200)
    }
    update() {
        if (this.y > 700) {
            this.setUp()
        }
        this.y += this.speed
    }
}
class Bullet extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.speed = 10

    }
    update() {
        this.y -= this.speed
        this.hasPoint()
        if(this.y < 0){
            this.alive = false
        }
    }
    hasPoint() {
        if (this.alive) {
            let temp = this.sence.enemys
            var x = this.x
            var y = this.y
            for (let i in temp) {
                let e = temp[i]
                if(e.alive){
                    if (rectIntersects(this, e) || rectIntersects(e, this)) {
                        log("命中")
                        this.alive = false
                        e.alive = false
                        let boom = Boom.new(this.game,'boom')
                        boom.x = e.x
                        boom.y = e.y
                        this.sence.addElements(boom)
                    }
                }
            }
        }

    }
}
class Boom extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.showTime = 3
    }
    setUp() {
       
    }
    update() {
        if(this.showTime > 0){
            this.showTime --
        }
        if(this.showTime == 0) {
            this.alive = false 
        }
    }
}