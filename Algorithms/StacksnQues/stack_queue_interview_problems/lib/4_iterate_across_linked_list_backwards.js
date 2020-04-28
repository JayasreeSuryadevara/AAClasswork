// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employ either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    // lL = [a,b,c,d]
    let reversed = [],
        current = linkedList.head;

    while (current !== null ) {
        let shifted = '';
        shifted += current.value;

        // unshift mimics queue behavior
        reversed.unshift(shifted);
        current = current.next;
    }    

    // join mimics a simple linear dequeue 
    return reversed.join(' -> ');
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
