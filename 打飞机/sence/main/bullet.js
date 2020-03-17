class Bullet  extends guaImage {
    constructor(game, name, bulletTarget, launcher) {
        super(game, name)
        this.speed = 10
        this.transfrom = false
        this.bulletTarget = bulletTarget
        this.defaultTarget = 'bullet'
        this.launcher = launcher?launcher:''
    }
    static new(game,name,bulletTarget, launcher) {
        var i = new this(game, name, bulletTarget, launcher)
        return i
    }
    update() {
        this.flying()
        this.hasPoint()
        this.outMap()
        this.checkBulletCarsh()
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
        if (e && e.alive) {
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
    bulletCarsh(e) {
        if (e.alive) {
            if (rectIntersects(this, e) || rectIntersects(e, this)) {
               if(this.launcher != e.launcher) {
                this.alive = false
                e.alive = false
               }
            }
        }
    }
    checkBulletCarsh() {
        let list = this.game.sence.bullets;
        if(list.length > 1) {
            for(let i in list) {
                let item = list[i]
                this.bulletCarsh(item)
            }
        }
    }
    getTarget() {
        let targetArr = []
        let bulletTarget = this.bulletTarget;
        let temp = this.sence[bulletTarget]
        if(temp) {
            targetArr =  targetArr.concat(temp)
        }
        return targetArr
    }
    hasPoint() {
        if (this.alive) {
            let temp = this.getTarget()
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