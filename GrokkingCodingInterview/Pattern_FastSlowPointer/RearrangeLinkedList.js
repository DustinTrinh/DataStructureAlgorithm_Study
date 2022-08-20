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
      result = "";
      temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      console.log(result);
    }
  }
  
  
  const reorder = function(head) {
    // TODO: Write your code here
    return
  }
  
  
  head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(8)
  head.next.next.next.next = new Node(10)
  head.next.next.next.next.next = new Node(12)
  reorder(head)
  head.print_list()
  