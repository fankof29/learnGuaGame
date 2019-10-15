class Enemy extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.setUp()
    }
    setUp() {
        this.speed = randowBetween(3, 10)
        this.x = randowBetween(0, 350)
        this.y = -randowBetween(0, 200)
        this.cooltime = 5
        this.fireTimes = 1
    }
    update() {
        if (this.y > 700) {
            this.setUp()
        }else {
            if (this.cooltime == 0 && this.y > 0) {
                this.fire()
            } else {
                this.cooltime--
            }
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