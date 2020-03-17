class guaText {
    constructor(game,text, x, y){
        this.game = game
        this.x = x;
        this.y = y;
        this.text = text;
        this.alive = true
    }
    static new(game,text, x, y) {
        var i = new this(game,text, x, y)
        return i
    }
    update(){

    }
    draw(){
        this.game.drawText(this.text, this.x, this.y)
    }
}