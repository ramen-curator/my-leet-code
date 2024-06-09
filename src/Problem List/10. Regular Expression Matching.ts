import { myLog } from "../util";

/* Tag: Hard */

function isMatch(str: string, pattern: string): boolean {
	return false;
}

// const testcaseInput = "aa";
// const testcaseInput1 = "a";
// const testcaseOKResult = false;
// 竟然要考虑子串？
// const testcaseInput = "aab";
// const testcaseInput1 = "c*a*b";
// const testcaseOKResult = true;
// 这明明是true，怎么会是false？题目你到底什么意思？
// 我知道了，我理解错题意了。*不是0~n个任意字符，而是0~n个任意的前一个字符。
const testcaseInput = "mississippi";
const testcaseInput1 = "mis*is*p*.";
const testcaseOKResult = false;
const result = isMatch(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
