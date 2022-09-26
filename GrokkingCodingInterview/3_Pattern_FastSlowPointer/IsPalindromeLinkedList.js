/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const is_palindromic_linked_list = function (head) {
    let storeNodes = [];

    while (head) {
        storeNodes.push(head.value);
        head = head.next;
    }
    let left = 0;
    let right = storeNodes.length - 1;

    while (left <= right) {
        if (storeNodes[left] === storeNodes[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
};


head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
