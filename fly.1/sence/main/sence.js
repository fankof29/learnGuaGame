

class sence extends GuaSence {
    constructor(game) {
        super(game)
        this.enemys = []
        this.setUp()
        
    }
    setUp(){
        
        var g = this.game;
        this.play = Bird.new(g, 'bird')
        this.pipes = Pipes.new(g)
        this.addElements(this.play)
        this.addElements(this.pipes)
        this.bases = []
        for(let i = 0; i < 2; i ++){
            let b = Base.new(g,'base')
            b.x = i* b.textrue.width
            this.addElements(b)
            this.bases.push(b)
        }

        
    }
    update(){
        super.update()
        this.setInput()
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
    //     g.registerAction('j', function () {
    //         self.play.fire();
    //     })
    }
    // addEnemys(){
    //     let es = []
    //     for(let i = 0; i < this.enemysNumber; i++ ){
    //         let e = Enemy.new(this.game,'enemy')
    //         this.addElements(e)
    //         es.push(e)
    //     }
    //     this.enemys = es;
    // }
}

