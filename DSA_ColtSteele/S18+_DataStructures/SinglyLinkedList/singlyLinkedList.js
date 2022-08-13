//https://cs.slides.com/colt_steele/singly-linked-lists#/3
//https://visualgo.net/en/list

//Piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length+=1;
    }
    //add to the beginning of list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length+=1;
    }

    pop(){
        if(!this.head) return null;

        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length-=1;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }
    //remove the head
    shift(){
        if(!this.head) return null;

        let temp = this.head.next;
        this.head = temp;
        this.length-=1;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let thisNode = this.head;
        while(counter!==index){
            thisNode = thisNode.next;
            counter++;
        }
        return thisNode;
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
        if(index < 0 || index > this.length) return false;
        else if(index === 0){
            this.unshift(val);
            this.length+=1;
            return true;
        } 
        else if(index === this.length){
            this.push(val);
            this.length+=1;
            return true;
        }
        else{
            let newNode = new Node()
            newNode.val = val;

            let oldNode = this.get(index)
            let prevNode = this.get(index-1);

            prevNode.next = newNode;
            newNode.next = oldNode;

            this.length+=1;
            return true;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        else if(index === 0){
            this.shift();
            this.length-=1;
            return true;
        }
        else if(index === this.length-1){
            this.pop()
            this.length-=1;
            return true;
        }
        else{
            let prevNode = this.get(index-1);
            let thisNode = this.get(index);
            let nextNode = thisNode.next;

            prevNode.next = nextNode;
            this.length-=1;
            return true;
        }
        
    }

    //Or we can just Unshift from the beginning. WIll do the job too
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
}

var list1 = new SinglyLinkedList()
var list2 = new SinglyLinkedList()

list1.push(65);
list1.push(52);
list1.push(32);
list1.push(23);
list1.push(99);
list1.print();

list1.reverse()
list1.print();
