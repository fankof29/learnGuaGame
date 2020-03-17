

class sence extends GuaSence {
    constructor(game) {
        super(game)
        this.score = 0
        this.enemys = []
        this.setUp()
        this.setInput()

    }
    setUp() {
        var g = this.game;
        this.bg = Bg.new(g, 'bg')
        this.play = Bird.new(g, 'bird')
        this.pipes = Pipes.new(g)
        this.senceScore = Score.new(g, 0, 20, 20)
        this.addElements(this.bg)
        this.addElements(this.play)
        this.addElements(this.pipes)
        this.bases = []
        for (let i = 0; i < 2; i++) {
            let b = Base.new(g, 'base')
            b.x = i * b.textrue.width
            this.addElements(b)
            this.bases.push(b)
        }
        this.addElements(this.senceScore)
    }
    gameEnd() {
        let endSence = SenceEnd.new(this.game)
        this.game.replaceScene(endSence)
    }
    checkGameEnd() {
        if (!this.play.alive) {
            return true;
        }
    }
    update() {
        super.update()
        if (this.checkGameEnd()) {
            this.gameEnd()
        }
        this.senceScore.update(this.score)
    }
    draw() {
        super.draw()

    }
    setInput() {
        var g = this.game
        var self = this;
        g.canvas.addEventListener("mousedown", function (e) {
            if(!window.start) {
                window.start = true
            }
            self.play.moveUp();
        })
    }
}

