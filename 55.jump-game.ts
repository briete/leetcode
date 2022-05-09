/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  // ここにたどり着けるかどうか
  const target = nums.length - 1;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    //
    max = Math.max(max, i + nums[i]);

    // ジャンプできる数が最後の要素以上になっていれば、到達可能と判断できる
    if (max >= target) {
      return true;
    }

    if (max <= i && nums[i] === 0) {
      return false;
    }
  }

  return false;
}
// @lc code=end
