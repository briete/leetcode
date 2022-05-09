/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let first = head;
  let second = head;

  for (let i = 0; i < n; i++) {
    if (!second.next) {
      if (i === n - 1) {
        return head.next;
      }
      return head;
    }
    second = second.next;
  }
  while (second.next) {
    first = first.next;
    second = second.next;
  }
  if (first.next) {
    first.next = first.next.next;
  }

  return head;
}
// @lc code=end
