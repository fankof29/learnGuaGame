class Bg extends guaImage {
    constructor(game,name){
        super(game,name)

    }
    draw() {
        this.game.content.drawImage(this.textrue, this.x, this.y, 400, 700)

    }
   
}