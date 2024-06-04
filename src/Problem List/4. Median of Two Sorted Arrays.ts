import { myLog } from "../util";

/* Tag: Hard */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    return 0;
};

const testcaseInput = [[1, 2], [3, 4]];
const testcaseOKResult = 2.5;
// const testcaseInput = [[1, 3], [2]];
// const testcaseOKResult = 2;

const result = findMedianSortedArrays(testcaseInput[0], testcaseInput[1]);
myLog("result: " + result)
myLog("isOK? " + (testcaseOKResult === result).toString())

export default {}