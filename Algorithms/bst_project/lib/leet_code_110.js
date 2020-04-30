// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// function isBalanced(root) {
//   // if (!root) return 0;

//   let leftCount = 0;
//   let rightCount = 0;
//   if (root.right) {
//     rightCount += isBalanced(root.right);
//   } else if (root.left) {
//     leftCount += isBalanced(root.left);
//   }
//   return (Math.abs(leftCount - rightCount) <= 1);
// }

function getHeight(root){
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root) {
  if (!root) return true;
  let heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;

  return heightDiff && isBalanced(root.right) && isBalanced(root.left);
}


//     4
//   2     5
// 1   3
//   2   4