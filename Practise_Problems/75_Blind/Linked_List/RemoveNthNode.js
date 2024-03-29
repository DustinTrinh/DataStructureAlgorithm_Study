// /https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  let cur = head;
  let counter = 0;

  while (cur) {
    counter += 1;
    cur = cur.next;
  }

  counter = counter - n + 1;
  let ret = new ListNode();
  ret.next = head;
  saver = ret;

  while (saver) {
    if (counter === 1) {
      saver.next = saver.next.next;

      console.log(saver);
    }

    saver = saver.next;

    counter--;
  }

  console.log(saver);

  return ret.next;
};
