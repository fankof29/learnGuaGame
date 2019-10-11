class GuaSence {
    constructor(game){
        this.game = game
        this.elements = []
    }  
    static new(game) {
        var i = new this(game)
        return i
    }
    addElements(el){
        el.sence = this
        this.elements.push(el)
    }
    draw() {
        for(let i = 0; i < this.elements.length; i++){
            let e = this.elements[i]
            if(e.alive){
               e.draw()
            }
        }
        
    }
    update() {
        if (window.paused) {
            return
        }
        for(let i = 0; i < this.elements.length; i++){
            let e = this.elements[i]
            e.update()
        }
        this.elements = this.elements.filter (e=>e.alive == true )
    }
}