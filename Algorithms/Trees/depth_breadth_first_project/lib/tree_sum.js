function treeSum(root) {
    if (!root) return 0;

    return treeSum(root.left) + treeSum(root.right) + root.val;
}


module.exports = {
    treeSum
};