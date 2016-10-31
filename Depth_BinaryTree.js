function TreeNode(val) {
      this.val = val;
      this.left = null;
      this.right = null;
}




function BinaryTreeDepth(root) {
  return (root === null) ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

