

class sence extends GuaSence {
    constructor(game) {
        super(game)
        this.enemys = []
        this.score = 0
        this.setUp()
        
    }
    setUp(){
        var g = this.game;
        this.enemysNumber = 5
        this.play = Play.new(g,'play')
        this.play.x = 140;
        this.play.y = 500;
        this.senceScore = Score.new(g, 0, 20, 20)
        this.addElements(this.play)
        this.addEnemys()
        this.setInput()
        this.addElements(this.senceScore)

        
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
    isWin() {
        if(this.score === 5) {
            let self = this;
        setTimeout(function(){
            let win = WinTitle.new(self.game)
            self.game.replaceScene(win)
           },1000)
        }
    }
    checkEnemys() {
        this.enemys = this.enemys.filter (e=>e.alive == true )
        if(this.enemys.length < 3) {
            this.addEnemys()    
        }
    }
    update(){
        super.update()
        this.isEnd()
        this.senceScore.update(this.score)
        this.isWin()
        // this.checkEnemys()
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

