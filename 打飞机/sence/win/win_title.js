class WinTitle extends GuaSence{
    constructor(game){
        super(game)
        game.registerAction('r', function(){
            var s = SenceTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw(){
        this.game.content.fillText('游戏胜利-------按 r 返回标题界面', 100, 290)
    }
}