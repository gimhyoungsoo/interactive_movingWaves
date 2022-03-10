export class Point {
    constructor(index,x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
        console.log('x',this.x,'y',this.y,'fixedY',this.fixedY,"max:", this.max);
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}