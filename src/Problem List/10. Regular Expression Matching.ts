import { myLog } from "../util";

/* Tag: Hard */

/**
 * 第一遍做，意味*是匹配0~n个任意字符。
 * 用“假设”、“回滚”的方式做。
 * 判题，失败一次。看测试数据，以为题意是“模式可以覆盖考虑子串”，
 *      觉得不可思议。于是继续做了一个这个功能。
 * 判题，失败二次。看测试数据，用“*是匹配0~n个任意字符”算了一遍，没问题。
 *      于是重新思考题目，才发现*是0~n个前一个字符。于是决定重做。
 * 判题，失败十一次。原来.*不是单字符啊，是通配符。
 * 判题，失败十四次。然后通过。
 * 判题说我这个运行时间，是最差的，倒数第一的。
 * 下午13点42分，到现在18点57分。这道题耗时，5小时15分。
 */
interface IfObj {
	i: number;
	j: number;
	okIdxArr: number[];
}
interface NowIf {
	i: number;
	j: number;
	n: number;
}
function isMatch(str: string, pattern: string): boolean {
	let i = 0;
	let j = 0;
	const IfObjList: IfObj[] = [];
	while (i !== str.length || j < pattern.length) {
		const p = pattern[j];
		const p1 = pattern[j + 1];
		// whenStrFinished，检查尾部。
		if (str[i] === undefined) {
			// 此时尾巴还有剩东西，因为while为true。
			// 将*的东西进行忽略。
			// 促成下一个if，“格式化”
			if (pattern[j + 1] === "*") {
				j++;
			}
			if (pattern[j] === "*") {
				while (pattern[j + 2] === "*") {
					j += 2;
				}
				j++;
			}
			if (pattern[j] === undefined) return true;
			// 说明此时的j的落点，是没有被处理过的纯字母。
			if (checkReallyFalse(IfObjList)) return false;
			restoreEnv();
			continue;
		}
		if (p === "*") {
			j++;
			continue;
		}
		if (p1 !== "*") {
			if (p === "." || p === str[i]) {
				i++;
				j++;
				continue;
			}
			if (checkReallyFalse(IfObjList)) return false;
			restoreEnv();
			continue;
		}
		// p1 === "*"

		// 作假设
		const ifObj: IfObj = {
			i,
			j,
			okIdxArr: (() => {
				const result = [-1];
				const isPointTag = p === ".";
				if (!isPointTag) {
					let okIdx = 0;
					while (str[i + okIdx] === p) {
						result.push(okIdx);
						okIdx++;
					}
				} else {
					[...str.slice(i)].forEach((c, i) => {
						result.push(i);
					});
				}
				return result;
			})(),
		};
		IfObjList.push(ifObj);
		restoreEnv();
	}
	return true;

	function restoreEnv() {
		const nif = popNowIf(IfObjList);
		if (nif === null) {
			throw new Error("checkReallyFalse first please");
		}
		i = nif.i + nif.n;
		j = nif.j;
		j += 2;
		i++;
	}
}

function checkReallyFalse(IfObjList: IfObj[]) {
	if (IfObjList.length === 0) return true;
	if (IfObjList.every(({ okIdxArr }) => okIdxArr.length === 0)) return true;
	return false;
}
function popNowIf(IfObjList: IfObj[]): NowIf | null {
	while (IfObjList.length !== 0) {
		const co = IfObjList[IfObjList.length - 1];
		if (co.okIdxArr.length === 0) {
			IfObjList.pop();
			continue;
		}
		const { i, j } = co;
		const n = co.okIdxArr.pop()!;
		if (co.okIdxArr.length === 0) {
			IfObjList.pop();
		}
		return { i, j, n };
	}
	return null;
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
// const testcaseInput = "ab";
// const testcaseInput1 = ".*";
// const testcaseOKResult = true;
// const testcaseInput = "aaa";
// const testcaseInput1 = "aaaa";
// const testcaseOKResult = false;
// const testcaseInput = "aa";
// const testcaseInput1 = "a*";
// const testcaseOKResult = true;
// const testcaseInput = "a";
// const testcaseInput1 = "ab*";
// const testcaseOKResult = true;
// const testcaseInput = "aaa";
// const testcaseInput1 = "a*a";
// const testcaseOKResult = true;
// const testcaseInput = "aab";
// const testcaseInput1 = "c*a*b";
// const testcaseOKResult = true;
// const testcaseInput = "bbbba";
// const testcaseInput1 = ".*a*a";
// const testcaseOKResult = true;
// const testcaseInput = "ab";
// const testcaseInput1 = ".*";
// const testcaseOKResult = true;
// const testcaseInput = "mississippi";
// const testcaseInput1 = "mis*is*p*.";
// const testcaseOKResult = false;
// const testcaseInput = "aaa";
// const testcaseInput1 = "ab*a*c*a";
// const testcaseOKResult = true;
const testcaseInput = "abc";
const testcaseInput1 = "a***abc"; // 竟然会有多个*
const testcaseOKResult = true;

const result = isMatch(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
