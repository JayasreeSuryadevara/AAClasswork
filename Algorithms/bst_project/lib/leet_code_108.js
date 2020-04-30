// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height - balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10, -3, 0, 5, 9],

//   One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height balanced BST:

//      0
//     / \
//  -3    9
//   /    /
// - 10  5

 function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
  
function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let mid = Math.floor(nums.length/2);
  let root = new TreeNode(nums[mid]);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);

  return root;
}
