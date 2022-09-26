/*
1. Find if it has circle
2. Find the length of the circle
3. Create 2 pointers and move 1 pointer ahead equivilant to # of length of circle
4. Keep going next until they met. Finally found the start point of circle 

Time Complexity: O(N)
Space Complexity:O(1)

*/
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function has_cycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return countCycleLength(slow);
        }
    }
    return 0;
}

function countCycleLength(slow) {
    let length = 0;
    let current = slow;

    while (true) {
        current = current.next;
        length++;

        if (current === slow) {
            break;
        }
    }
    return length;
}

const find_cycle_start = function(head){
    let cycleLength = has_cycle(head);
    let pointer1 = head;
    let pointer2 = head;

    while(cycleLength > 0){
        pointer2 = pointer2.next;
        cycleLength--;
    }

    while(pointer1 !== pointer2){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
  };

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

console.log(Math.floor(1/10));