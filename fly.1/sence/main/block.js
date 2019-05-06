var Block = function(position,game){
    var p = position;
    var image = game.imageByName('block');

    var o = {
        image: image,
        x: p[0],
        y: p[1],
        alive:true,
        life:p[2] || 1,
    }
    o.collide = function(b) {
        return  o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    o.kill = function(){
       o.life--
       if(o.life <1){
           o.alive = false;
       }
    }

    return o;
}