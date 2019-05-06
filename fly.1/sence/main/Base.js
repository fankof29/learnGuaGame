class Base extends guaImage {
    constructor(game,name){
        super(game,name)
        this.x = 0
        this.y = 600
        this.speed = 10
        this.ha = 3
    }

    update(){
        if(this.ha === 0) {
            this.ha = 3
            this.x += 30
        }else {
            this.ha--
            this.x -= this.speed
        }
    }
}