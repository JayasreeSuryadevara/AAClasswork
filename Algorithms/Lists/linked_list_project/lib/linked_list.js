// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;      
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.length++;
        this.tail = node;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.head) return undefined;

        let currentNode = this.head;
        let previousNode = this.head;
        while (currentNode.next){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = previousNode;
        this.tail.next = null;
        this.length--;
        if (!this.length){
            this.head = null;
            this.tail = null;
        }   
        return currentNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() { 
        if (!this.head) return undefined;
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if(this.length ===  0) this.tail = null;
        return currentNode;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
         while(node){
             if (node.value === target){
                 return true;
             }
             node = node.next;
         }
         return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let currentNode = this.head;
        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let found = this.get(index)
        if (found){
            found.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    // insert(0, 5) [1]]
    // [1,2,3,4,5]
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.addToHead(index);

        let node = new Node(val);
        let previousNode = this.get(index -1);
        let nextNode = previousNode.next;
        previousNode.next = node;
        node.next = nextNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        let prev = this.get(index-1);
        let next = this.get(index+1);
        let parent = prev.next;

        prev.next = next;
        this.length--;
        return parent;

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
