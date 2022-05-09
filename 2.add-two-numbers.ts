/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let _l1: ListNode = l1;
  let _l2: ListNode = l2;

  let l1Count = 0;
  let __l1 = l1;
  while (__l1.next) {
    l1Count++;
    __l1 = __l1?.next;
  }
  let l2Count = 0;
  let __l2 = l2;
  while (__l2.next) {
    l2Count++;
    __l2 = __l2?.next;
  }

  let l = l1Count >= l2Count ? l1 : l2;
  console.log(l);

  do {
    const sum = (_l1?.val ?? 0) + (_l2?.val ?? 0);
    console.log(sum);
    if (sum >= 10) {
      l.val = Number(sum.toString().charAt(1));
      if (!l?.next) {
        l.next = new ListNode(Number(sum.toString().charAt(0)));
      } else {
        l.next.val += Number(sum.toString().charAt(0));
      }
    } else {
      l.val = sum;
    }

    _l1 = _l1?.next;
    _l2 = _l2?.next;
    l = l.next;
  } while (l);

  return l1Count >= l2Count ? l1 : l2;
}
// @lc code=end
