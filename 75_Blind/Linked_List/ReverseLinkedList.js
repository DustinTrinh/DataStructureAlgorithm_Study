//https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Moving pointers Prev and Current

var reverseList = function (head) {
  let prev = null;

  let current = head;

  while (current) {
    //save next pointer
    let next = current.next;

    //point the linkedlist to Null
    current.next = prev;

    //Shift pointer prev to the right
    prev = current;

    //shift pointer current to its next element
    current = next;
  }

  return prev;
};
