import { myLog } from "../util";

/* Tag: Hard */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const result: number[] = [];
    let t1: number | null = null;
    let t2: number | null = null;
    while (
        nums1.length !== 0 ||
        nums2.length !== 0 ||
        t1 !== null ||
        t2 !== null
    ) {
        if (t1 === null && nums1.length !== 0) {
            t1 = nums1.shift() ?? null;
        }
        if (t2 === null && nums2.length !== 0) {
            t2 = nums2.shift() ?? null;
        }
        if (t1 === null || t2 === null) {
            result.push((t1 || t2) as number);
            if (t1 !== null) t1 = null;
            if (t2 !== null) t2 = null;
            continue;
        }
        const v = Math.min(t1, t2);
        result.push(v);
        t1 === v ? (t1 = null) : (t2 = null);
    }
    const length = result.length;
    const isOdd = length % 2 === 1;
    if (isOdd) {
        const idx = Math.floor(length / 2);
        return result[idx];
    } else {
        const idx1 = length / 2 - 1;
        const idx2 = length / 2;
        return (result[idx1] + result[idx2]) / 2;
    }
}

const testcaseInput = [
    [1, 2],
    [3, 4],
];
const testcaseOKResult = 2.5;
// const testcaseInput = [[1, 3], [2]];
// const testcaseOKResult = 2;

const result = findMedianSortedArrays(testcaseInput[0], testcaseInput[1]);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());

export default {};
