
class Block extends guaImage {
    constructor(game, name, p) {
        super(game, name)
        this.life = p[2] || 1
        this.x = p[0]
        this.y = p[1]
       
    }
    static new(game, name, p) {
        var i = new this(game, name, p)
        return i
    }
    collide(b) {
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }

    kill() {
        this.life--
        if (this.life < 1) {
            this.alive = false;
        }
    }
    update(b) {
        super.update()
        if (this.collide(b)) {
            this.kill()
            b.反弹()
        }
    }
    draw(){
        let x = this.x
        let y = this.y
        this.game.content.drawImage(this.textrue, x, y)
    }
}
class Blocks {
    constructor(nowLeve, game) {
        this.alive = true
        this.game = game
        this.els = []
        this.loadLevel(nowLeve)
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    update() {
        let ball = this.sence.ball
        for (let e of this.els) {
            e.update(ball)
        }
    }
    draw() {
        for (let i in this.els) {
            let e = this.els[i]
            if (e.alive) {
                e.draw()
            }

        }
    }

    loadLevel(n) {
        n = n - 1
        var level = levels[n]
        var blocks = []
        for (var i = 0; i < level.length; i++) {
            var p = level[i]
            var b = Block.new(this.game, 'block', p)
            blocks.push(b)
        }
        this.els = blocks
    }
    pushBlock(b) {
        if (this.checkAddBlock(b)) {
            this.els.push(b)
            this.addBlockTleves(b)
            log(this.els)
        }

    }
    rectIntersects(a,b){
        var o = a
        if (b.y > o.y && b.y < o.y + o.h) {
            if (b.x > o.x && b.x < o.x + o.w) {
                return true
            }
        }
        return false
    }
    addBlockTleves(b){
        let x = b.x
        let y = b.y
        levels[nowLeve - 1].push([x,y])
    }
    checkAddBlock(p) {

        if(p.x < 0 || p.x > (400-p.w)){
           return false;
        }
        if(p.y < 0 || p.y > (300-p.h)){
            return false;
         }
        for (let b of this.els ) {
            if(b.x == p.x && b.y == p.y) {
                return false
            }
            if ((rectIntersects(p, b) || rectIntersects(b, p))){
                return false
            }
        }
        return true
    }

}