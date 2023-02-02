/*
 * @lc app=leetcode id=131 lang=rust
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
impl Solution {
    pub fn partition(s: String) -> Vec<Vec<String>> {
        let mut result: Vec<Vec<String>> = vec![];
        let mut current_list: Vec<String> = vec![];
        dfs(&mut result, &s, 0, &mut current_list);
        return result;
    }
}

fn dfs(result: &mut Vec<Vec<String>>, s: &String, start: usize, current_list: &mut Vec<String>) {
    if start == s.len() {
        result.push(current_list.to_vec());
    }

    for i in start..s.len() {
        if is_palindrome(s, start, i) {
            current_list.push(
                s.chars()
                    .skip(start)
                    .take(i - start + 1)
                    .collect::<String>(),
            );
            dfs(result, s, i + 1, current_list);
            current_list.pop();
        }
    }
}

fn is_palindrome(s: &String, low: usize, high: usize) -> bool {
    let (mut low, mut high) = (low, high);
    while low < high {
        if s.chars().nth(low).unwrap() != s.chars().nth(high).unwrap() {
            return false;
        }
        low += 1;
        high -= 1;
    }
    return true;
}

// @lc code=end
