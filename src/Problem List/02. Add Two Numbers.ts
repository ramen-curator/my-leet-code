// 题目地址： https://leetcode.com/problems/add-two-numbers/

/* Tag: Medium */

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

import { myLog } from "../util";

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const arrToListNode = (arr: number[]): ListNode | null => {
    const a = arr.map((n) => new ListNode(n, null));
    a.forEach((item, index, arr) => {
        const next = arr[index + 1] || null;
        item.next = next;
    });
    return a[0] || null;
};

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let tmp = 0;
    let result: number[] = [];
    while (l1 !== null || l2 !== null || tmp !== 0) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + tmp;
        tmp = 0;
        if (sum >= 10) {
            sum -= 10;
            tmp = 1;
        }
        result.push(sum);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return arrToListNode(result);
}

let result = addTwoNumbers(arrToListNode([2, 4, 3]), arrToListNode([5, 6, 4]));
const resultArr = [];
while (result) {
    resultArr.push(result.val);
    result = result.next;
}
const okResult = [7, 0, 8];
myLog(resultArr.toString());
myLog(resultArr.toString() === okResult.toString());

export default {};
