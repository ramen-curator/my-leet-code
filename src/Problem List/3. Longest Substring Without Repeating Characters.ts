import { myLog } from "../util";

/* Tag: Medium */

/* 判题说我的解法不够快 */

function lengthOfLongestSubstring(sourceStr: string): number {
    let tmpArr: string[] = [];
    let resultIdx = 0;
    let maxCnt = 0;
    let currentCnt = 0;
    for (let i = 0; i < sourceStr.length; i++) {
        const c = sourceStr[i];
        if (tmpArr.length === 0) {
            resultIdx = i;
            currentCnt = 0;
        }
        if (!tmpArr.includes(c)) {
            tmpArr.push(c);
            currentCnt += 1;
            maxCnt = Math.max(currentCnt, maxCnt);
        } else {
            tmpArr = [];
            i = resultIdx;
        }
    }

    return maxCnt;
}

const testcase = "aab";
const testOkNum = 2;

const result = lengthOfLongestSubstring(testcase);
myLog("result: " + result);
myLog("isOK? " + (testOkNum === result).toString());

export default {};
