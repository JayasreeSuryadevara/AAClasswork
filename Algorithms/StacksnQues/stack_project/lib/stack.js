// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = this.bottom = null;
    this.length = 0;
  }

  // return the size of the stack
  push(val){
    let newNode = new Node(val);
    if (this.top === null) {
      this.top = this.bottom = newNode;
    } else {
      let oldTop = this.top;
      this.top = newNode;
      newNode.next = oldTop;
    }
    return this.length += 1;
  }

  // return the removed value
  pop(){
    if (this.top === null) return null;
    let poppedItem = this.top;
    this.top = this.top.next;

    if ( this.top === null ) this.bottom = null;
    this.length--;
    return poppedItem.value;
  }

  size(){
    return this.length;
  }

}

exports.Node = Node;
exports.Stack = Stack;
