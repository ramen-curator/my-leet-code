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
	let i = 0;
	let j = 0;
	while (i !== str.length) {
		const p = pattern[j];
		const p1 = pattern[j + 1];
		// 这里已经考虑了p===undefined、p1===undefined的情况
		if (p1 !== "*") {
			if (p === "." || p === str[i]) {
				i++;
				j++;
				continue;
			} else {
				return false;
			}
		}
		// p1 === "*"
		while (str[i] === p) {
			i++;
		}
		j++;
	}
	return true;
}

// const testcaseInput = "aa";
// const testcaseInput1 = "a";
// const testcaseOKResult = false;
// const testcaseInput = "aab";
// const testcaseInput1 = "c*a*b";
// const testcaseOKResult = true;
// const testcaseInput = "mississippi";
// const testcaseInput1 = "mis*is*p*.";
// const testcaseOKResult = false;
const testcaseInput = "ab";
const testcaseInput1 = ".*";
const testcaseOKResult = true;
const result = isMatch(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
