var Ball = function(game){
    var image = game.imageByName('ball');

    var o = {
        image: image,
        x: 100,
        y: 240,
        speedX: 10,
        speedY: 10,
        fired: false,
    }

    o.move = function(){
        
      if(o.fired) {
        if(o.x < 0 || o.x > 400){
            o.speedX = -o.speedX
        }
        if(o.y < 0 || o.y >300) {
            o.speedY = -o.speedY;
        }
        o.x += o.speedX;
        o.y += o.speedY;
      }
    }
    o.fire = function(){
        o.fired = true;
    }
    o.反弹 = function() {
      o.speedY *= -1
    }
    o.hasPoint = function(x,y){
      var hasX = x >= o.x && x <= o.x +o.image.width;
      var hasY = y >= o.y && x <= o.y +o.image.height;
      return hasX && hasY;
    }
    return o;
}