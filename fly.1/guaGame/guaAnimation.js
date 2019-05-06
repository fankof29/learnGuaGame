class guaAnimation {
    constructor(game,name){
        this.game = game
        this.frames = []
        for(let i = 1; i < 4; i ++){
            let imgname = `${name}${i}`
            log(imgname)
            var t = game.imageByName(imgname)
            this.frames.push(t)
        }
        this.textrue = this.frames[0]
        this.x = 0;
        this.y = 0;
        this.w = this.textrue.width;
        this.h = this.textrue.height;
        this.rotation = 0;
        this.flipX = false
        this.flipY = false
        this.alive = true
        this.framesIndex = 0;
        this.framesCount = 3;
    }
    static new(game,name) {
        var i = new this(game,name)
        return i
    }
    update(){
        this.framesCount -- 
        if(this.framesCount == 0) {
            this.framesCount = 3
            this.framesIndex = (this.framesIndex  + 1)  % this.frames.length
            this.textrue = this.frames[this.framesIndex]
        }
    }
    draw(){
        let content = this.game.content
        let p = this
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