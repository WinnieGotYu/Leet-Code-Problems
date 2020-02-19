/**Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3 */

var isSymmetric = function(root) {
  //if root is null, it is a mirror of itself
  if (root === null) return true;
  return rec(root.left, root.right);
};

function rec(left, right) {
  //since this is binary tree if both null we have completed search
  if (left === null && right === null) return true;
  //if all true continue recursion
  if (left && right && left.val === right.val)
    return rec(left.left, right.right) && rec(left.right, right.left);
  return false;
}