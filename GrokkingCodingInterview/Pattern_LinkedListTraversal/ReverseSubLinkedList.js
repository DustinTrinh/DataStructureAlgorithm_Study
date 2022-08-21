class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  const reverse_sub_list = function(head, p, q) {
    if(p === q ) return head;
    let prev = null;
    let current = head;
    let beforeP = null;
    let afterQ = null;

    while(current){
        if(current && current.next && current.next.value === p){
            beforeP = current;
            p = current.next;
        }
        if(current.value === q){
            afterQ = current.next;
            q = current;   
        }
        current = current.next;
    }

    //reverse
    current = head;
    prev = afterQ;
    while(p !== afterQ){
        let temp  = p.next;
        p.next = prev;
        prev = p;
        p = temp;
         
    }
    beforeP.next = q;
    return head;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
  