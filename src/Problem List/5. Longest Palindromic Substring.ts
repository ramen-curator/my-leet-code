import { myLog } from "../util";

/* Tag: Medium */

function longestPalindrome(str: string): string {
    let maxArr: string[] = [];
    for (let idx = 0; idx < str.length; idx++) {
        let curArr: string[] = [];
        curArr.push(str[idx]);
        let j = 0;
        while (str[idx] === str[idx + j + 1]) {
            curArr.push(str[idx + j + 1]);
            j++;
        }
        let ai = idx - 1,
            bi = idx + j + 1;
        while (ai >= 0 && bi < str.length && str[ai] === str[bi]) {
            curArr.unshift(str[ai]);
            curArr.push(str[bi]);
            ai--;
            bi++;
        }
        if (curArr.length > maxArr.length) {
            maxArr = [...curArr];
        }
    }
    return maxArr.join("");
}

// const testcaseInput = "babad";
// const testcaseOKResult = "bab";
// const testcaseInput = "cbbd";
// const testcaseOKResult = "bb";
// const testcaseInput = "ccc";
// const testcaseOKResult = "ccc";
const testcaseInput = "tattarrattat";
const testcaseOKResult = "tattarrattat";
const result = longestPalindrome(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
