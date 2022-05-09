/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const array = [];
  for (const x of s.split("")) {
    switch (x) {
      case "{":
      case "(":
      case "[":
        array.push(x);
        break;
      default:
        if (array.length === 0) return false;
        if (x === "}" && array[array.length - 1] === "{") {
          array.pop();
        } else if (x === ")" && array[array.length - 1] === "(") {
          array.pop();
        } else if (x === "]" && array[array.length - 1] === "[") {
          array.pop();
        } else {
          return false;
        }
    }
  }
  return array.length === 0;
}
// @lc code=end
