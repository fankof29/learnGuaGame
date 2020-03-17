class SenceEnd extends GuaSence {

    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SenceTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.content.fillText('游戏结束, 按 r 返回标题界面', 100, 290)

    }

}