import { myLog } from "../util";

/* Tag: Medium */

function convert(str: string, numRows: number): string {
    let resultArr: string[][] = [];
    let j = 0;
    let k = 0;
    let isLine = true;

    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        if (isLine) {
            if (j < numRows) {
                if (resultArr[k] === undefined) resultArr[k] = [];
                resultArr[k].push(s);
                j++;
                if (j === numRows) {
                    isLine = false;
                    j--;
                    j--;
                    k++;
                }
            } else {
                console.error("something error");
            }
        } else {
            if (j > 0) {
                resultArr.push(new Array(numRows).fill(""));
                resultArr[k][j] = s;
                j--;
                k++;
                if (j === 0) {
                    isLine = true;
                }
            } else if (j === -1) {
                resultArr.push(new Array(numRows).fill(""));
                j++;
                resultArr[k][j] = s;
                isLine = true;
                k++;
            } else {
                // j===0
                if (resultArr[k] === undefined) resultArr[k] = [];
                resultArr[k].push(s);
                j++;
                isLine = true;
                if (j === numRows) {
                    isLine = false;
                    j--;
                    j--;
                    k++;
                }
            }
        }
    }

    let resultStr = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < resultArr.length; j++) {
            resultStr += resultArr[j][i] ?? "";
        }
    }
    return resultStr;
}
// const testcaseInput = "PAYPALISHIRING";
// const testcaseInput1 = 3;
// const testcaseOKResult = "PAHNAPLSIIGYIR";
// const testcaseInput = "AB";
// const testcaseInput1 = 1;
// const testcaseOKResult = "AB";
// const testcaseInput = "ABC";
// const testcaseInput1 = 2;
// const testcaseOKResult = "ACB";
// const testcaseInput = "ABCD";
// const testcaseInput1 = 2;
// const testcaseOKResult = "ACBD";
const testcaseInput = "ABCDE";
const testcaseInput1 = 2;
const testcaseOKResult = "ACEBD";
const result = convert(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
