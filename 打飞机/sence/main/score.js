class Score extends guaText {
    constructor(game,text, x, y){
        super(game, text, x, y)
        this.text =  `得分为：${text}`
    }
    update(num) {
        this.text = `得分为：${num}`
    }
}