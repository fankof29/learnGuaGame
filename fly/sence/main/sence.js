

class sence extends GuaSence {
    constructor(game) {
        super(game)
        this.enemys = []
        this.setUp()
        
    }
    setUp(){
        
        var g = this.game;
        this.enemysNumber = 5
        this.play = Play.new(g,'play')
        this.play.x = 140;
        this.play.y = 500;
        this.addElements(this.play)
        this.addEnemys()

        this.setInput()
    }
    isEnd(){
        if(!this.play.alive) {
          let self = this;
           setTimeout(function(){
            let endSence = SenceEnd.new(self.game)
            self.game.replaceScene(endSence)
           },1000)
        }
    }
    update(){
        super.update()
        this.isEnd()
    }
    setInput(){
        var g = this.game
        var self = this;

        g.registerAction('a', function () {
            self.play.moveLeft();
        })
        g.registerAction('d', function () {
            self.play.moveRight();
        })
        g.registerAction('w', function () {
            self.play.moveUp();
        })
        g.registerAction('s', function () {
            self.play.moveDown();
        })
        g.registerAction('j', function () {
            self.play.fire();
        })
    }
    addEnemys(){
        let es = []
        for(let i = 0; i < this.enemysNumber; i++ ){
            let e = Enemy.new(this.game,'enemy')
            this.addElements(e)
            es.push(e)
        }
        this.enemys = es;
    }
}

