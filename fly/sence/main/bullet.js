class Bullet  extends guaImage {
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
                this.alive = false
                e.alive = false
                let boom = Boom.new(this.game, 'boom')
                boom.x = e.x
                boom.y = e.y
                this.sence.addElements(boom)
                if(e.type === 'enemy') {
                    this.game.sence.score += 1;
                }
            }
        }
    }
    hasPoint() {
        if (this.alive) {
            let bulletTarget = this.bulletTarget;
            let temp = this.sence[bulletTarget]
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