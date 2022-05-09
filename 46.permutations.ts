/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const results: Array<Array<number>> = [];

  function backtrack(tempList: Array<number>, _nums: number[]) {
    if (_nums.length === 0) {
      results.push(tempList);
      return;
    }
    _nums.forEach((n, i) =>
      backtrack([...tempList, n], [..._nums.slice(0, i), ..._nums.slice(i + 1)])
    );
  }

  backtrack([], nums);
  return results;
}
// @lc code=end
