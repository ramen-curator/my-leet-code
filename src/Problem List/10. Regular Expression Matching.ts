import { myLog } from "../util";

/* Tag: Hard */

/**
 * 第一遍做，意味*是匹配0~n个任意字符。
 * 用“假设”、“回滚”的方式做。
 * 判题，失败一次。看测试数据，以为题意是“模式可以覆盖考虑子串”，
 *      觉得不可思议。于是继续做了一个这个功能。
 * 判题，失败二次。看测试数据，用“*是匹配0~n个任意字符”算了一遍，没问题。
 *      于是重新思考题目，才发现*是0~n个前一个字符。于是决定重做。
 */

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
