class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val,root=this.root){
       if (!this.root){
        this.root = new TreeNode(val);
        return;
       }

       if (val < root.val){
           if(!root.left){
            root.left = new TreeNode(val);
           }else {
            this.insert(val,root.left)
           }
       } else {
           if(!root.right){
            root.right = new TreeNode(val);
           } else {
            this.insert(val,root.right)
           }
       }
   }

   searchRecur(val, root=this.root) {
       if (!root) return false;

       if (val < root.val){
        return this.searchRecur(val,root.left)
       }else if (val === root.val){
        return true;
       }else{
        return this.searchRecur(val, root.right)
       }
       return false;
   }

   searchIter(val){
       if (!this.root) return false;
        let currentNode = this.root;
        if (currentNode.val === val) return true;

       while (currentNode) {
        if (val < currentNode.val ){
            console.log("less than cur");
            currentNode = currentNode.left;
            console.log("currentNode", currentNode);
        } else if (val > currentNode.val) {
            console.log("more than cur");
            currentNode = currentNode.right;
        } else {
            return true;
        }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};

tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);
console.log(tree);
console.log(tree.searchIter(5));