/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
  }
  return Math.max(...nums);
}
// @lc code=end
