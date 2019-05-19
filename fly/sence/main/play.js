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
    death() {
        this.alive = false;
        let boom = Boom.new(this.game, 'boom')
        boom.x = this.x
        boom.y = this.y
        this.sence.addElements(boom)
    }
    fire() {
        if (this.cooltime == 0) {
            this.cooltime = 5
            let x = this.w / 2 + this.x - 1
            let y = this.y - 10
            let bullet = Bullet.new(this.game, 'bullet','enemys')
            bullet.x = x
            bullet.y = y
            this.sence.addElements(bullet)

        }

    }
}

class Enemy extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.x = randowBetween(0, 350)
        this.speed = randowBetween(3, 10)
        this.cooltime = 5
        this.fireTimes = 1
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
        if (this.cooltime == 0) {
            this.fire()
        } else {
            this.cooltime--
        }

        this.y += this.speed
        this.crashPlay()
    }
    crashPlay() {
        let play = this.sence.play
        if (play.alive) {
            if (rectIntersects(play, this) || rectIntersects(this, play)) {
                play.alive = false
                let boom = Boom.new(this.game, 'boom')
                boom.x = play.x + play.w / 2
                boom.y = play.y
                this.sence.addElements(boom)
            }
        }

    }
    fire() {
        if (this.fireTimes > 0) {
            this.fireTimes--
        } else {
            return
        }
        let x = this.w / 2 + this.x
        let y = this.y + 30
        let bullet = Bullet.new(this.game, 'bullet','play')
        bullet.speed = this.speed + 5
        bullet.transfrom = true
        bullet.x = x
        bullet.y = y
        this.sence.addElements(bullet)
    }
}
class Bullet extends guaImage {
    constructor(game, name, bulletTarget) {
        super(game, name)
        this.speed = 10
        this.transfrom = false
        this.bulletTarget = bulletTarget
    }
    static new(game,name,bulletTarget) {
        var i = new this(game,name,bulletTarget)
        return i
    }
    update() {
        this.flying()
        this.hasPoint()
        this.outMap()
    }
    flying() {
        if (this.transfrom) {
            this.y += this.speed
        } else {
            this.y -= this.speed
        }


    }
    outMap() {
        if (this.x < 0 || this.x > 400 || this.y < 0 || this.y > 700) {
            this.alive = false;
        }
    }
    checkPoint(e) {
      
        if (e.alive) {
            if (rectIntersects(this, e) || rectIntersects(e, this)) {
                log("命中")
                this.alive = false
                e.alive = false
                let boom = Boom.new(this.game, 'boom')
                boom.x = e.x
                boom.y = e.y
                this.sence.addElements(boom)
            }
        }
    }
    hasPoint() {
        if (this.alive) {
            let bulletTarget = this.bulletTarget;
            log('bullet',this)
            let temp = this.sence[bulletTarget]
            log('temp',temp)
            if (Array.isArray(temp)) {
                for (let i in temp) {
                    let e = temp[i]
                    this.checkPoint(e)
                }
            } else {
                this.checkPoint(temp)
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
        if (this.showTime > 0) {
            this.showTime--
        }
        if (this.showTime == 0) {
            this.alive = false
        }
    }
}