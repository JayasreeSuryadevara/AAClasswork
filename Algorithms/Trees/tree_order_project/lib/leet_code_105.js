// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// const { TreeNode } = require('./tree_node.js');
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function buildTree(preorder, inorder) {

  if (preorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);

  let rootIndex = inorder.indexOf(root.val);
  let left = inorder.slice(0, rootIndex);
  let right = inorder.slice(rootIndex + 1);
  
  let leftPreorder = preorder.slice(1, left.length+1);
  let rightPreorder = preorder.slice(left.length + 1);

  root.left = buildTree(leftPreorder, left);
  root.right = buildTree(rightPreorder, right);

  return root
}

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// result = buildTree(preorder, inorder)
// console.log(result);
// preorde 9r = [3,, 20, 15, 7]
// root = 3
// left = 9
// right = 15,20,7
// inorder = [9, 3, 15, 20, 7]
