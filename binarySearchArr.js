/**Given a sorted (in ascending order) integer array 
 * nums of n elements and a target value, 
 * write a function to search target in nums. 
 * If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   //since nums is sorted in ascending, only need to search half
//   let halfIdx = Math.floor(nums.length / 2);

//   //decide if searching left half or right half
//   let startIdx = nums[halfIdx] > target ? 0 : halfIdx;

//   for (let i = startIdx; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

function searchArr(nums, target) {
  let left = 0, 
      right = nums.length - 1; 
  while( left <= right){
    const mid = Math.floor(left + (right - left)/2);
    if(nums[mid] === target) return mid;
    if(target > nums[mid]){
      left = mid + 1; 
    }
    if(target < nums[mid]){
      right = mid - 1;
    }
  }
  return -1; 
}

console.log(searchArr([-1, 0, 3, 5, 9, 12], 9)); //4;
console.log(searchArr([-1, 0, 3, 5, 9, 12], 2)); //-1;
console.log(searchArr([1, 2, 3, 4, 5, 6, 7, 8], 4)); //3
