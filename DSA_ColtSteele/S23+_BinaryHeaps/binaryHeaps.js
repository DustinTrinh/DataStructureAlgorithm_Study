//https://cs.slides.com/colt_steele/heaps#/9/0/0
//https://visualgo.net/en/heap
//Max Binary Heaps means the Parents will always be larger than the children
//Find children in array by math: knowing n is the index within array
// Left child: 2n + 1 && Right Child: 2n + 2
//Find parent by (n-1)/2 and floored it

//Insertion and Removal is O(logn)
//Search is O(N)

 class MaxBinaryHeap{
    constructor(){
        this.values = [];

    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx]
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parentValue = this.values[parentIdx];
            if(element <= parentValue) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentValue;
            idx = parentIdx;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
             this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];
        
        while (true){
            let leftChild = idx*2+1;
            let rightChild = idx*2+2;
            let left, right;
            let swap = null;

            if(leftChild < length){
                left = this.values[leftChild];
                if(left > element){
                    swap = leftChild;
                }
            }
            if(rightChild < length){
                right = this.values[rightChild];
                if( swap === null && right > element ||
                    swap !== null && right > left){
                    swap = rightChild;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
 }

 let heap = new MaxBinaryHeap();

 heap.insert(90);
 heap.insert(80);
 heap.insert(70);
 heap.insert(60);
 heap.insert(50);
 heap.insert(100)

 console.log(heap);

 heap.extractMax();
 console.log(heap);