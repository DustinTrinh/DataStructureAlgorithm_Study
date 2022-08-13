//https://cs.slides.com/colt_steele/stacks
// -> Last In First Out

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
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
    push(val){
        var newNode = new Node();
        newNode.val = val;
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.length+=1;
    }
    pop(){
        if(this.length === 0) return null;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        else{
            let temp = this.first.next;
            this.first = temp;
        }
        this.length-=1;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.print();