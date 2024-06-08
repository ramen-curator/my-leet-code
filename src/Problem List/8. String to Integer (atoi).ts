import { myLog, SignedInt32Limit } from "../util";

/* Tag: Medium */

/* 题后感：
犯错误比较多的地方，是build arr的流程的时候。有细节的边界条件没考虑到。
这个在下面的测试输入中有所体现。
一个小错误是throw new Error之前，有的地方忘记写continue。
一个小错误是，return的时候，忘记带上符号。
本来想封装成函数来提高可读性的。但是build Arr中耦合了退出流程。这增大了一点重构成本。

这一道题打了1小时。

这种题目打起来，感觉比平时开发的级别更低级。就像高级语言与低级语言那样。

这里感觉可以封装成一个class。一个arr和k的class。封装成常用函数。名字该起什么好呢？
SignedInt32Limit
 */

function myAtoi(inputStr: string): number {
	const si = constructorSignedInt32Limit(inputStr);
	if (si.checkOutOfBounds()) {
		return si.sign === -1 ? si.NEGATIVE_LIMIT : si.POSITIVE_LIMIT;
	}
	return si.toInteger();
}

function constructorSignedInt32Limit(inputStr: string) {
	const si = new SignedInt32Limit();
	let isFirstChecking = true;
	let isSignAssigned = false;
	let haveLeadingZero = false;
	const handleWrongCondition = () => {
		si.digits = [0];
		return si;
	};
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
				return handleWrongCondition();
			} else {
				break;
			}
		}
		if (c.match(/[+-]/) !== null) {
			if (isFirstChecking) {
				if (isSignAssigned) {
					return handleWrongCondition();
				} else {
					if (haveLeadingZero) {
						return handleWrongCondition();
					}
					c === "+" ? (si.sign *= 1) : (si.sign *= -1);
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
			si.digits.push(parseInt(c));
			continue;
		}
		throw new Error("Situations not considered: " + c);
	}
	return si;
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
