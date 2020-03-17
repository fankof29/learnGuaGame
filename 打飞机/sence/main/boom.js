class Boom extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.showTime = 3
    }
    setUp() {

    }
    update() {
        if (this.showTime > 0) {
            this.showTime--
        }
        if (this.showTime == 0) {
            this.alive = false
        }
    }
}