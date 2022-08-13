class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print(){
        var arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    push(val){
        let newNode = new Node();
        newNode.val = val;
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length+=1;
        }
        else{
            this.tail.next = newNode;
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length+=1;
        }
    }

    unshift(val){
        let newHead = new Node()
        newHead.val = val;
        if(this.length === 0){
            this.head = newHead;
            this.tail = newHead;
        }
        else{
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length+=1;
    }

    pop(){
        let poppedNode = this.tail;
        if(this.length === 0) return null;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length-=1;
        return true;
    }
    shift(){
        if(this.length===0) return null;
        let headNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = headNode.next;
            this.head.prev = null;
            headNode.next = null;
        }
        this.length-=1;
        return true;
    }
    get(index){
        let midway = Math.floor(this.length/2);
        let current = new Node();
        if(index < 0 || index >= this.length) return null;
        if(index <= midway){
            current = this.head;
            let i = 0;
            while(i !== index){
                current = current.next;
                i++;
            }
        }
        else if(index > midway){
            current = this.tail;
            let i = this.length-1;
            while(i !== index){
                current = current.prev;
                i--;
            }
        }
        return current;
    }

    set(index, newVal){
        var foundNode = this.get(index);

        if(foundNode){
            foundNode.val = newVal;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index >= this.length) return null;
        if(index === 0){
            this.unshift(val);
        } 
        else if(index === this.length){
            this.push(val);
        } 
        else{
            let oldNode = this.get(index);
            let prevNode = oldNode.prev;
            let newNode = new Node();
            newNode.val = val;
            this.length +=1;

            newNode.prev = prevNode;
            newNode.next = oldNode;

            oldNode.prev = newNode;
            prevNode.next = newNode;

        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0){
            this.shift();
        }
        else if(index === this.length-1){
            this.pop();
        }
        else{
            let tbrNode = this.get(index);
            let prevNode = tbrNode.prev;
            let nextNode = tbrNode.next;

            tbrNode.val = null;
            tbrNode.next = null;
            tbrNode.prev = null;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length-=1;
    }
}