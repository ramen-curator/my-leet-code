import { myLog } from "../util";

/* Tag: Medium */

/* 题后感：
犯错误比较多的地方，是build arr的流程的时候。有细节的边界条件没考虑到。
这个在下面的测试输入中有所体现。
一个小错误是throw new Error之前，有的地方忘记写continue。
一个小错误是，return的时候，忘记带上符号。
本来想封装成函数来提高可读性的。但是build Arr中耦合了退出流程。这增大了一点重构成本。

这一道题打了1小时。

这种题目打起来，感觉比平时开发的级别更低级。就像高级语言与低级语言那样。
 */

function myAtoi(inputStr: string): number {
	let arr: number[] = [];
	let k = 1;
	let isFirstChecking = true;
	let isSignAssigned = false;
	let haveLeadingZero = false;
	// build arr
	for (const c of inputStr) {
		if (c === " ") {
			if (isFirstChecking) {
				if (haveLeadingZero || isSignAssigned) {
					break;
				}
				continue;
			} else {
				break;
			}
		}
		if (c.match(/[A-z.]/) !== null) {
			if (isFirstChecking) {
				return 0;
			} else {
				break;
			}
		}
		if (c.match(/[+-]/) !== null) {
			if (isFirstChecking) {
				if (isSignAssigned) {
					return 0;
				} else {
					if (haveLeadingZero) {
						return 0;
					}
					c === "+" ? (k *= 1) : (k *= -1);
					isSignAssigned = true;
					continue;
				}
			} else {
				break;
			}
		}
		if (c.match(/[0-9]/) !== null) {
			if (isFirstChecking) {
				if (c === "0") {
					haveLeadingZero = true;
					continue;
				} else {
					isFirstChecking = false;
				}
			}
			arr.push(parseInt(c));
			continue;
		}
		throw new Error("Situations not considered: " + c);
	}

	// check boundary
	const positiveLimit = (-Math.pow(2, 30) * 2 + 1) * -1;
	const negativeLimit = -Math.pow(2, 30) * 2;
	const positiveLimitStr = positiveLimit.toString();
	const negativeLimitStr = negativeLimit.toString();
	const isNegative = k === -1;
	const isOutOfBoundary = (() => {
		const limitLength = isNegative
			? negativeLimitStr.length - 1
			: positiveLimitStr.length;
		if (arr.length > limitLength) return true;
		if (arr.length < limitLength) return false;
		for (let i = 0; i < arr.length; i++) {
			const v1 = arr[i];
			const v2 = parseInt(
				isNegative ? negativeLimitStr[i + 1] : positiveLimitStr[i]
			);
			if (v1 > v2) return true;
			if (v1 === v2) continue;
			return false;
		}
	})();
	if (isOutOfBoundary) return isNegative ? negativeLimit : positiveLimit;

	// parse to int
	let resultValue = 0;
	for (let i = 0; i < arr.length; i++) {
		const v = arr[i];
		resultValue += v * Math.pow(10, arr.length - 1 - i);
	}

	return resultValue * k;
}

// const testcaseInput = "42";
// const testcaseOKResult = 42;
// const testcaseInput = "0-1";
// const testcaseOKResult = 0;
// const testcaseInput = "   -042";
// const testcaseOKResult = -42;
// const testcaseInput = "   +0 123";
// const testcaseOKResult = 0;
const testcaseInput = "   + 123";
const testcaseOKResult = 0;
const result = myAtoi(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
