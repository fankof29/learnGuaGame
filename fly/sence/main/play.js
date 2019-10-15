class Play extends guaImage {
    constructor(game, name) {
        super(game, name)
        this.speed = 10
        this.cooltime = 0;
    }
    move() {
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > (400 - this.w)) {
            this.x = 400 - this.w
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > (700 - this.h)) {
            this.y = 700 - this.h
        }

    }
    moveLeft() {
        this.x -= this.speed
        this.move()
    }
    moveRight() {
        this.x += this.speed
        this.move()
    }
    moveUp() {
        this.y -= this.speed
        this.move()
    }
    moveDown() {
        this.y += this.speed
        this.move()
    }
    update() {
        if (this.cooltime > 0) {
            this.cooltime--
        }
    }
    death() {
        this.alive = false;
        let boom = Boom.new(this.game, 'boom')
        boom.x = this.x
        boom.y = this.y
        this.sence.addElements(boom)
    }
    fire() {
        if (this.cooltime == 0) {
            this.cooltime = 5
            let x = this.w / 2 + this.x - 1
            let y = this.y - 10
            let bullet = Bullet.new(this.game, 'bullet','enemys')
            bullet.x = x
            bullet.y = y
            this.sence.addElements(bullet)

        }

    }
}


