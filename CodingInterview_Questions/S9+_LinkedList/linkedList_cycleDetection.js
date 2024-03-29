//https://leetcode.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var detectCycle = function(head) {
    let slow = head, fast = head;

    while(true){
        slow = slow.next;
        fast = fast.next;

        if(fast === null || fast.next === null){
            return null;
        }
        else{
            fast = fast.next;
        }
        if(fast === slow){
            break;
        }
    }

    let p1 = head, p2 = fast;
    while(p1!==p2){
        p1=p1.next;
        p2=p2.next;
    }
    return p1;
};