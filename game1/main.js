
var nowLeve = 1;
var imgs = {
    ball: './images/ball.png',
    block: './images/block.png',
    paddle: './images/paddle.png',
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
                window.paused = !window.paused
            } 
        })
       
    }
    
    enableDebugMode(true)

    var editeLevls = function(){
        
        
    }
    editeLevls()
    var g =new GanGame({
        imags:imgs,
        runCallback:function(g){
            var s = sence.new(g)
            g.runWithScene(s);
        }
    });
}

_main();
