/*
 * @lc app=leetcode id=124 lang=rust
 *
 * [124] Binary Tree Maximum Path Sum
 */

// @lc code=start
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn max_path_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut answer = i32::MIN;
        Solution::dfs(&root, &mut answer);
        answer
    }

    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, answer: &mut i32) -> i32 {
        if let Some(n) = node {
            let val = n.borrow().val;
            let l = std::cmp::max(0, Solution::dfs(&n.borrow().left, answer));
            let r = std::cmp::max(0, Solution::dfs(&n.borrow().right, answer));
            *answer = std::cmp::max(*answer, val + l + r);
            val + std::cmp::max(l, r)
        } else {
            0
        }
    }
}
// @lc code=end
