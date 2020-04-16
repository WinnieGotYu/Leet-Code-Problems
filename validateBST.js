/**Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//check if they have children 
//if children, add to queue
//check if left child and right child follows BST
//if not return false;
//if true pop off queue


var isValidBST = function(root) {
  if(root === null) return false;
  let queue = [root];
  while(queue.length){
    let currNode = queue.shift();
    if(currNode.left){
      if(currNode.left.val > currNode.val) return false;
      queue.push(currNode.left);
    }
    if(currNode.right){
      if(currNode.right.val < currNode.val) return false;
      queue.push(currNode.right);
    }
  }
  return true;
};
