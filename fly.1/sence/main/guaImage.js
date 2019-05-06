class guaImage {
    constructor(game,name){
        this.game = game
        this.textrue = game.imageByName(name)
        this.x = 0;
        this.y = 0;
        this.w = this.textrue.width;
        this.h = this.textrue.height;
        this.flipY = false
        this.rotation = 0
        this.alive = true
    }
    static new(game,name) {
        var i = new this(game,name)
        return i
    }
    update(){

    }
    draw(){
        this.game.drawImage(this)
    }
}
