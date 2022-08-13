//https://cs.slides.com/colt_steele/queues
// -> First In First Out

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    print(){
        var arr = [];
        let current = this.first;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    enqueue(val){
        let newNode = new Node(val);
        console.log(newNode + " " + this.length);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length+=1;
    }
    dequeue(){
        if(this.length === 0) return null;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        this.length-=1;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();