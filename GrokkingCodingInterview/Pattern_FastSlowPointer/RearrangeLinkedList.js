/*
1. FInd middle.
2. Reverse middle
3. Point to corrent place
*/

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
    
    print_list() {
      let result = "";
      let  temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      console.log(result);
    }
  }
  
  const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while(current !== null){
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
      console.log("1")
    }
    return prev;
  }
  
  const reorder = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
    }

    let firstHalf = head;
    let secondHalf = reverseLinkedList(slow);
    
    while(firstHalf !== null && secondHalf !== null){
      let temp = firstHalf.next;
      firstHalf.next = secondHalf;
      firstHalf = temp;

      temp = secondHalf.next;
      secondHalf.next = firstHalf;
      secondHalf = temp;

    }
    if(firstHalf.next !== null){
      firstHalf.next = null;
    }
  }
  
  
  head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(8)
  head.next.next.next.next = new Node(10)
  head.next.next.next.next.next = new Node(12)
  reorder(head)
  head.print_list()
  