// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = this.bottom = null;
        this.length = 0;
    }

    push(newNode) {
        // let newNode = new Node(val);
        if (this.top === null) {
          this.top = this.bottom = newNode;
        } else {
          let oldTop = this.top;
          this.top = newNode;
          newNode.next = oldTop;
        }
        return this.length += 1;
    }

    pop() {
        if (this.top === null) return null;
        let poppedItem = this.top;
        this.top = this.top.next;
    
        if ( this.top === null ) this.bottom = null;
        this.length--;
        return poppedItem;
    }

    peek () {
        return this.top;
    }

    size(){
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.currentStack = this.inStack;
        this.front = this.back = null;
        this.length = 0;
    }

    _reverseStacks() {
        let i = 0,
            popped;

        console.log({currentStack: this.currentStack})
        
        while (this._oppStack().size() > 0) {
            popped = this._oppStack().pop();
            if (i === 0) {
                popped.next = null;
            }
            this.currentStack.push(popped); 
            i++;
        }

        let next = this.currentStack.pop();

        // next.next = null;
        this._oppStack().push(next);

        // console.log({next})
        // console.log({oppStack: this._oppStack().peek()})
        // this._oppStack().peek().next = this.currentStack.peek();

        console.log({currentStack: this.currentStack})

        this.currentStack = this._oppStack();
    }

    _oppStack() {
        return this.currentStack === this.inStack ?
            this.outStack :
            this.inStack;
    }

    enqueue(val) {
        let node = new Node(val);
        if (this.size() === 0) {
            this.currentStack.push(node);
            this.front = this.back = node;
        } else {
            this.currentStack.push(node);
            let popped = this.currentStack.pop();

            // must remind node that it's actually the last one
            node.next = null;

            if (this.size() === 1) {
                this.currentStack.peek().next = node;
            } else {
                popped.next = node;
            }

            this._oppStack().push(popped);
            this.back = node;
        }

        return ++this.length;
    }

    dequeue() {
        if (this.size() < 1) {
            this.front = this.back = null;
            return null;
        }

        if (this.currentStack.length === 1) {
            let popped = this.currentStack.pop();
            this._reverseStacks();
            this.front = this.currentStack.peek();
            if (this.size() === 1) this.back = this.currentStack.peek();
            
            this.length--;
            return popped;
        }
    }

    size() {
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
