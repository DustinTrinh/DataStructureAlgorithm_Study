//https://leetcode.com/problems/reverse-linked-list-ii/
//Reverse linked list from only M to N

var reverseBetween = function(head, left, right) {
    let currentPos = 1; currentNode = head, start=head;

    while (currentPos < left){
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }
    let newList = null;
    let  tail = currentNode;

    while(currentPos >= left && currentPos <= right){
        let next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;
    
    if(left > 1){
        return head;
    }
    else{
        return newList;
    }
};