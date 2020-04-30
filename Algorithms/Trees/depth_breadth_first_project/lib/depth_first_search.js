function depthFirstSearch(root, targetVal) {
    let treeStack = [root];

    while (treeStack.length) {
        let currentNode = treeStack.pop();

        if (targetVal === currentNode.val) return currentNode;
        if (currentNode.right) treeStack.push(currentNode.right);
        if (currentNode.left) treeStack.push(currentNode.left);
    }
    return null;
}


module.exports = {
    depthFirstSearch
};