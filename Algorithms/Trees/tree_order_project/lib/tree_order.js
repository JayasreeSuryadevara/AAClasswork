function inOrderArray(root) {
    if (!root) return [];

    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);

    return [...left, root.val, ...right];
}

function postOrderArray(root) {
    if (!root) return [];

    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);

    return [...left, ...right, root.val];
}


module.exports = {
    inOrderArray,
    postOrderArray
};