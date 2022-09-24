class Stack {
    // constrictor
    constructor() {
        this.myStack = [];
    }

    // push an element in stack
    push(newData) {
        this.myStack.unshift(newData);
    }

    // check whether stack is empty or not
    isEmpty() {
        if (this.myStack.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // pop element from the top of the stack
    pop() {
        if (this.isEmpty() == false) {
            var temp = this.myStack[0];
            this.myStack = this.myStack.slice(1);
            return temp;
        } else {
            throw new Error("End of Stack reached");
        }
    }

    // function for returning the stack
    getStack() {
        return this.myStack;
    }
}

function insertAtBottom(stack, item) {
    // Creating a helper function
    // Base case
    if (stack.isEmpty() == true) {
        stack.push(item);
    }

    // Recursive case
    else {
        var temp = stack.pop();
        insertAtBottom(stack, item);
        stack.push(temp);
    }
}

function reverse(testVariable) {
    // Recursive case
    if (testVariable.isEmpty() == false) {
        var temp = testVariable.pop();
        reverse(testVariable);
        insertAtBottom(testVariable, temp);
    }
}

myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(5);
myStack.push(8); // <---- 8 will be at the top of the stack because it was pushed last

console.log("Original Stack: ");
console.log(myStack.getStack());

reverse(myStack);

console.log("Reversed Stack: ");
console.log(myStack.getStack());
