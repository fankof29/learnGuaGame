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
    
var imgs = {
    // ball: './images/ball.png',
    // block: './images/block.png',
    // paddle: './images/paddle.png',
    play: './images/play.png',
    enemy:'./images/enemy.png',
    bullet:'./images/bullet.png',
    boom:'./images/boom.png',
    bird1:'./images/bird-1.png',
    bird2:'./images/bird-2.png',
    bird3:'./images/bird-3.png',
    base:'./images/base.png',
    pipe:'./images/pipe.png',
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
            } else if ('1234567'.includes(k)) {
                // 为了 debug 临时加的载入关卡功能
                blocks = loadLevel(Number(k))
            }
        })

        document.querySelector('#id-input-speed').addEventListener('input', function(event) {
            var input = event.target
            // log(event, input.value)
            window.fps = Number(input.value) === 0? 1:Number(input.value)
        })
    }
    
    enableDebugMode(true)

   

    var g =new GanGame({
        imags:imgs,
        runCallback:function(g){
            // var s = SenceTitle.new(g)
            var s = sence.new(g);
            g.runWithScene(s);
        }
    });
}

_main();
