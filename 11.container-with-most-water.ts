/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let _maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    _maxArea = Math.max(
      _maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return _maxArea;
}
// @lc code=end
