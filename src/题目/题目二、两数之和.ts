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
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const arrToListNode = (arr: number[]): ListNode | null => {
    const a = arr.map((n) => new ListNode(n, null))
    a.forEach((item, index, arr) => {
        const next = arr[index + 1] || null;
        item.next = next;
    })
    return a[0] || null;
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let tmp = 0;
    const a: number[] = [];

    const add = (a1: number, b: number) => {
        let sum = a1 + b + tmp;
        tmp = 0;
        if (sum >= 10) {
            sum = sum - 10;
            tmp = 1;
        }
        a.push(sum);
    }
    while (l1 !== null && l2 !== null) {
        add(l1.val, l2.val)
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 !== null || l2 !== null) {
        add((l1?.val || l2?.val || 0) as number, 0)
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    add(0, 0)
    const l = a.length - 1;
    if (a[l] === 0) {
        a.pop()
    }
    const a1 = a.map((n) => new ListNode(n, null))
    a1.forEach((item, index, arr) => {
        const next = arr[index + 1] || null;
        item.next = next;
    })

    return a1[0] || null;
}

let result = addTwoNumbers(arrToListNode([2, 4, 3]), arrToListNode([5, 6, 4]))
const resultArr = []
while (result) {
    resultArr.push(result.val)
    result = result.next
}
console.log(resultArr)
