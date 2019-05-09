class sence extends GuaSence {
    constructor(game) {
        super(game)
        this.setUp()

    }
    setUp() {

        var g = this.game;
        this.play = paddle.new(g, 'paddle')
        this.ball = Ball.new(g, 'ball')
        this.blocks = Blocks.new(nowLeve,g)
        this.addElements(this.play)
        this.addElements(this.ball)
        this.addElements(this.blocks)
        this.setInput()
    }
    update() {
        super.update()
        if(this.checkEndGame()) {
            this.endGame()
        }
    }
    checkEndGame() {
        if(this.ball.y > (this.play.y + 10)) {
            return true
        }
        return false
    }
    endGame() {
        let end = SenceEnd.new(this.game)
        this.game.replaceScene(end)
    }
    setInput() {
        var g = this.game
        var self = this;

        g.registerAction('a', function () {
            self.play.moveLeft();
        })
        g.registerAction('d', function () {
            self.play.moveRight();
        })
        g.registerAction('f', function () {
            self.ball.tofire();
            log(self)
        })
        var addBlock = function (x, y) {
            let p = [x, y]
            let b =  Block.new(g,'block',p)
            self.blocks.pushBlock(b)

        }
        
        var enableDrag = false;
        g.canvas.addEventListener("mousedown", function (e) {
            var x = e.offsetX
            var y = e.offsetY
            if (self.ball.hasPoint(x, y)) {
                enableDrag = true;
            }else {
                addBlock(x,y)
            }

        })

        g.canvas.addEventListener("mousemove", function (e) {
            var x = e.offsetX
            var y = e.offsetY
            if (enableDrag) {
                self.ball.x = x;
                self.ball.y = y;
            }

        })
        g.canvas.addEventListener("mouseup", function (e) {

            enableDrag = false;
        })

        window.addEventListener('keydown', function(event){
            var k = event.key
            if ('1234567'.includes(k)) {
                nowLeve = k
                self.blocks.loadLevel(nowLeve)
            }
        })
    }

}

