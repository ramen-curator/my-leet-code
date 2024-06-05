import { myLog } from "../util";

/* Tag: Easy */

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const v1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const v2 = nums[j];
            if (v1 + v2 === target) return [i, j];
        }
    }
    return [];
}

const testcaseInput = [2, 7, 11, 15];
const testcaseInput1 = 9;
const testcaseOKResult = [0, 1];
const result = twoSum(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
