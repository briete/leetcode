/*
 * @lc app=leetcode id=128 lang=rust
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let set: std::collections::HashSet<_> = nums.iter().copied().collect();
        set.iter()
            .filter(|x| !set.contains(&(*x - 1)))
            .map(|&x| (x..).take_while(|x| set.contains(x)).count())
            .max()
            .map_or(0, |x| x as i32)
    }
}
// @lc code=end
