// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
// Data Structure Operation	Time Complexity (Avg)	Time Complexity (Worst)	Space Complexity (Worst)
//       Access	                    Θ(n)	                O(n)	                  O(n)
//       Search	                    Θ(n)	                O(n)	                  O(n)
//       Insertion	                Θ(1)	                O(1)	                  O(n)
//       Deletion	                  Θ(1)	                O(1)	                  O(n)
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = this.back = null;
    this.length = 0;
  }

  // add a node to the front of the queue
  // returns the new length of queue
  enqueue(val) {
    let newNode = new Node(val);
    if (this.front === null) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.length++;
    return this.length;
  }

  // removes a node from the front of the queue
  // returns removed node
  dequeue() {
    if (this.front === null) return null;
    let removedNode = this.front;

    this.front = removedNode.next;
    if (this.front === null) this.back = null;

    this.length--;
    return removedNode.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;