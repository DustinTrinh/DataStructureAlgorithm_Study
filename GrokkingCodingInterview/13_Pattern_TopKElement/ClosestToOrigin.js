const Heap = require("../../node_modules/collections/heap");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get_point() {
        return "[" + this.x + ", " + this.y + "] ";
    }
}

const find_closest_points = function (points, k) {
    let result = [];
    let maxHeap = new Heap([], null, ((a,b) => 
        Math.sqrt(Math.pow(a.x,2) + Math.pow(a.y,2)) - Math.sqrt(Math.pow(b.x,2) + Math.pow(b.y,2))
    ));

    for(let i = 0 ; i < k ; i++){
        maxHeap.push(points[i]);
    }
    for(let i = k; i < points.length; i++){
        let tempDistance1 = Math.sqrt(Math.pow(points[i].x,2) + Math.pow(points[i].y,2) );
        let tempDistance2 = Math.sqrt(Math.pow(maxHeap.peek().x,2) + Math.pow(maxHeap.peek().y,2) );
        if(tempDistance1 < tempDistance2){
            maxHeap.pop();
            maxHeap.push(points[i]);
        }
        
    }
    return  maxHeap.toArray();
};

points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
console.log(points)
