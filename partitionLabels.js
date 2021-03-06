/**A string S of lowercase English letters is 
 * given. We want to partition this string 
 * into as many parts as possible so that 
 * each letter appears in at most one part, 
 * and return a list of integers representing 
 * the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" 
is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only. */

const partitionLabels = function (S) {
    if (!S || S.length === 0) {
      return S;
    }
  
    let map = new Map();
    let pointer = 0;
    let arr = [];
  
    for (let i = 0; i < S.length; i++) {
      map.set(S[i], i); // i will be index of the last seen char in the string
    }
  
    while (pointer < S.length) { // iterate through S 
      let s = "";  // Create subString
      let end = map.get(S[pointer]); // end is index of last occurance of char
  
      while (pointer <= end) {
        s += S[pointer];
        end = Math.max(map.get(S[end]), map.get(S[pointer])); // find the bigger index (ending)
        pointer++;
      }
  
      arr.push(s.length);
    }
    return arr;
  };

console.log(partitionLabels("ababcbacadefegdehijhklij"));
// [9, 7, 8]
// "ababcbaca", "defegde", "hijhklij"
