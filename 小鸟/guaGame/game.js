class GanGame {
    constructor(options) {
        this.actions = {}
        this.keys = {}
        this.images = options.imags
        this.scene = null
        this.runCallback = options.runCallback
        this._init();
        window.fps = 30
    }

    _init() {
        var canvas = document.querySelector("#id-canvas")
        var content = canvas.getContext('2d')
        this.canvas = canvas;
        this.content = content;
        this._EventInit();

        var loads = [];
        var names = Object.keys(this.images)

        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = this.images[name]
            let img = new Image();
            img.src = path;
            img.onload = () => {
                this.images[name] = img;
                loads.push(1)
                if (loads.length == names.length) {
                    this.__start()
                }
            }
        }
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.content.drawImage(img.textrue, img.x, img.y)
    }
    drawText(text, x, y) {
        this.content.fillText(text, x, y)
    }
    _EventInit() {
        var self = this;
        window.addEventListener('keydown', function (event) {
            self.keys[event.key] = true;
        })
        window.addEventListener('keyup', function (event) {
            self.keys[event.key] = false;
        })
    }
    registerAction(key, callback) {
        this.actions[key] = callback;

    }
    update(){
        this.sence.update();
    }
    draw(){
        this.sence.draw();
    }
    runloop() {
        let self = this;
        var actions = Object.keys(self.actions);

        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (self.keys[key]) {
                self.actions[key]();
            }
        }
        self.update();
        self.content.clearRect(0, 0, self.canvas.width, self.canvas.height)
        self.draw()
        setTimeout(function () {
            self.runloop()
        }, 1000 / window.fps)


    }

    __start() {
        this.runCallback(this)
    }
    runWithScene(sence) {
        this.sence = sence;
        var g = this;
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(s){
        this.sence = s;
    }
    imageByName(name){
        if(!name) {
            return;
        }
       
        return this.images[name]
    }
}


