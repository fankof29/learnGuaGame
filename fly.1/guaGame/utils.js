const log = function(){
    return console.log.apply(console,arguments)
}

const e = function(e) {
    return document.querySelector(e)
}

const imageFromPath = function(path){
    var img = new Image()
    img.src = path
    return img
}
const rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.textrue.height) {
        if (b.x > o.x && b.x < o.x + o.textrue.width) {
            return true
        }
    }
    return false
}
const randowBetween = function(start, end){
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}