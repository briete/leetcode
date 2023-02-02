/*
 * @lc app=leetcode id=136 lang=rust
 *
 * [136] Single Number
 */
// @lc code=start
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut hashmap = std::collections::HashMap::new();
        for n in nums.iter() {
            *hashmap.entry(*n).or_insert(0) += 1;
        }
        for (k, v) in hashmap.iter() {
            if *v == 1 {
                return *k;
            }
        }
        return -1;
    }
}
// @lc code=end
