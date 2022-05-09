/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 先頭を保持
  let head = new ListNode(0);
  let point = head;
  const nodes: number[] = [];

  // 配列に集める
  for (const index in lists) {
    let l = lists[index];
    while (l) {
      nodes.push(l.val);
      l = l.next;
    }
  }

  // pointからlinkedlistに入れ直す
  const sortedNodes = nodes.sort((a, b) => a - b);
  for (const index in sortedNodes) {
    point.next = new ListNode(nodes[index]);
    point = point.next;
  }

  return head.next;
}
// @lc code=end
