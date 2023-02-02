/*
 * @lc app=leetcode id=9 lang=rust
 *
 * [9] Palindrome Number
 */

// @lc code=start
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let num = x.to_string();
        let num_reverse =
            String::from_utf8(num.as_bytes().to_owned().into_iter().rev().collect()).unwrap();
        if num == num_reverse {
            true
        } else {
            false
        }
    }
}
// @lc code=end
