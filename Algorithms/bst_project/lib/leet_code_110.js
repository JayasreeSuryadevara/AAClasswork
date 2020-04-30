// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root) {
  // if (!root) return 0;

  let leftCount = 0;
  let rightCount = 0;
  if (root.right) {
    rightCount += isBalanced(root.right);
  } else if (root.left) {
    leftCount += isBalanced(root.left);
  }
  return (Math.abs(leftCount - rightCount) <= 1);
}
