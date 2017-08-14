/**
 * Created by vo13n on 12-Jul-17.
 */
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
let p1 = new Point(1, 3);
let p2 = new Point(5, -1);
console.log(Point.distance(p1, p2));