var loadLevel = function(n,game) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p,game)
        blocks.push(b)
    }
    return blocks
}
window.start = false;  
var imgs = {
    bird1:'./images/bird-1.png',
    bird2:'./images/bird-2.png',
    bird3:'./images/bird-3.png',
    base:'./images/base.png',
    pipe:'./images/pipe.png',
    bg:'./images/bg.png',
}
var _main = function(){
    var enableDebugMode = function(enable){
        if(!enable){
            return
        }

        window.paused = false

        window.addEventListener('keydown', function(event){
            var k = event.key
            if (k == 'p') {
                log('paused')
                // 暂停功能
                window.paused = !window.paused
            } 
        })

        // document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        //     var input = event.target
        //     window.fps = Number(input.value) === 0? 1:Number(input.value)
        // })
    }
    
    enableDebugMode(true)

   

    var g =new GanGame({
        imags:imgs,
        runCallback:function(g){
            var s = sence.new(g);
            g.runWithScene(s);
        }
    });
}

_main();
