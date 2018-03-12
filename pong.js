class Vec
{
    constructor(x=0, y=0)
    {
        this.x = x;
        this.y = y;
    }
    get len()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    set len(value){
        const f = value / this.len;
        this.x *= f;
        this.y *= f;
    }
}

class Rect
{
    constructor(x=0, y=0)
    {
        this.pos = new Vec(0, 0);
        this.size = new Vec(x, y);
    }
    get left()
    {
        return this.pos.x - this.size.x / 2;
    }
    get right()
    {
        return this.pos.x + this.size.x / 2;
    }
    get top()
    {
        return this.pos.y - this.size.y / 2;
    }
    get bottom()
    {
        return this.pos.y + this.size.y / 2;
    }
}

class Ball extends Rect
{
    constructor()
    {
        super(10, 10);
        this.vel = new Vec;
    }
}


class Player extends Rect
{
    constructor()
    {
        super(20, 100);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
        
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}

class Pong
{
    constructor()
    {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
        this.ball = new Ball;
        this.players = [ new Player, new Player,] ;


    }
    clear()
    {

    }

    collide(player, ball)
    {

    }
    
    draw()
    {
        this.clear();
        this.drawRect(this.ball);
        this.drawRect(this.player);
        this.drawScode();
    }
    
    drawRect(rect)
    {
        this._context.fillStyle = '#fff';
        this._context.fillRect(rect.left, rect.top, rect.size.x, rect.size.y)
    }

    drawScore()
    {
    
    }
    play(){}
    reset(){}
    start()
    {
        requestAnimationFrame(this._frameCallback);
    }
    update(dt){}

}


const canvas = document.querySelector('#pong');
const pong = new Pong(canvas);

canvas.addEventListener('click', () => pong.play());

canvas.addEventListener('mousemove', event => {
    const scale = event.offsetY / event.target.getBoundingClientRect().height;
    pong.players[0].pos.y = canvas.height * scale;
});

pong.draw();
