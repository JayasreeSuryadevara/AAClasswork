function breadthFirstArray(root) {
    let visited = [];
    let queue = [root];

    while (queue.length){

        currentNode = queue.shift();
        visited.push(currentNode.val);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }

    return visited;
}

module.exports = {
    breadthFirstArray
};

//       3
//    4    5
//   1  2  3  6