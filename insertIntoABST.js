/**
 * You are given the root node of a binary search tree (BST) 
 * and a value to insert into the tree. 
 * Return the root node of the BST after the insertion. 
 * It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, 
as long as the tree remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

/**
 * 1. declare currentNode as root 
 * 2. enter while loop with True
 * 3. check if current node value is greater than or less than val
 * 4. if less than current node value, 
 *    check if left node exist if no, set new Treenode()
 * 5. if greater than current node value, 
 *    check if right node exist, if no, set new TreeNode()
 */
const insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val); // Handle edge case

  let currentNode = root; // Start at root 4

  while (true) {
    if (currentNode.val < val) {
      // 4 < 5 ? Yes. // 7 < 5 ? No.
      if (currentNode.right !== null) {
        currentNode = currentNode.right; // currentNode = 7
      } else {
        currentNode.right = new TreeNode(val);
        break;
      }
    } else {
      if (currentNode.left !== null) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = new TreeNode(val); // Add new TreeNode(5) to left of node 7
      }
    }
  }
  return root;
};