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

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${has_cycle(head)}`);
