class SenceTitle extends GuaSence{

    constructor(game){
        super(game)
        game.registerAction('k', function(){
            var s = new sence(game);
            game.replaceScene(s)
        })
    }
    draw(){
        this.game.content.fillText('按 k 开始游戏点击鼠标开始', 100, 290)
    }
}