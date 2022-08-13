//https://leetcode.com/problems/add-two-numbers/submissions/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

var addTwoNumbers = function (l1, l2) {
  var sum = 0;
  var rem = 0;
  var value = 0;
  var dummyhead = new ListNode(0);
  var node = dummyhead;

  while (l1 != null || l2 != null || rem != 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    sum = x + y + rem;
    value = sum % 10;
    rem = Math.floor(sum / 10);
    node.next = new ListNode(value);
    node = node.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummyhead.next;
};
