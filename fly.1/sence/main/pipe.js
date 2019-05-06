class Pipes {
    constructor(game){
        this.g = game
        this.els = []
        this.distance = 200
        this.pipiSpace = 200
        this.pipeNum = 3
        this.alive = true
        for(let i = 0; i < this.pipeNum; i++) {
            let p1 = guaImage.new(this.g,'pipe')
            let p2 = guaImage.new(this.g,'pipe')
            p1.flipY = true
            p1.x = 400 + i * this.distance
            p2.x = p1.x
            this.resetPipePosition(p1,p2)
            this.els.push(p1)
            this.els.push(p2)    
        }
        log('els',this.els)
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    resetPipePosition(p1, p2){
        p1.y = randowBetween(100,200)
        p2.y = (p1.h + this.pipiSpace - p1.y)
    }
    update(){
        for(let p of this.els) {
            p.x -= 5
            if(p.x < -100) {
                p.x += this.distance * this.pipeNum
            }
        }

    }
    draw(){
        let content = this.g.content
        for(let p of this.els) {
            content.save()
            var w2 = p.w /2
            var h2 = p.w / 2
            content.translate(p.x + w2,p.y +h2)
            let sX = p.flipX? -1: 1
            let sY = p.flipY? -1: 1
            content.scale(sX,sY)
            content.rotate(p.rotation * Math.PI / 180)
            content.translate(-w2,-h2)
            content.drawImage(p.textrue,0,0)
            content.restore()
        }
    }
}