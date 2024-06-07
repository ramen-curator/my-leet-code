import { myLog } from "../util";

/* Tag: Medium */

/* 特殊条件是，不可以存操作64位的整数，也就是[-2的31次方, 2的31次方-1]之间 */

function converNumToReverseAbsArr(x: number) {
	const k = x < 0 ? -1 : 1;
	const isNegative = k === -1;
	const arr = [];
	let isFirst = true;
	if (x === 0) {
		arr.push(x);
	} else {
		while (isNegative ? x < 0 : x > 0) {
			const n = (x % 10) * k;
			if ((isFirst && n !== 0) || !isFirst) {
				isFirst = false;
				arr.push(n);
			}
			isNegative ? (x += n) : (x -= n);
			x /= 10;
		}
	}
	return arr;
}

function reverse(x: number): number {
	const positiveLimitStr = (Math.pow(2, 31) - 1).toString();
	const negativeLimitStr = (-Math.pow(2, 31)).toString();
	const k = x < 0 ? -1 : 1;
	const isNegative = k === -1;
	const arr = converNumToReverseAbsArr(x);

	let isDangerous = isNegative
		? arr.length >= negativeLimitStr.length - 1
		: arr.length >= positiveLimitStr.length;
	let r = 0;
	for (let i = 0; i < arr.length; i++) {
		const n = arr[i];
		const idx = arr.length - 1 - i;
		if (isDangerous) {
			const targetChar = (() => {
				return isNegative
					? negativeLimitStr[negativeLimitStr.length - 1 - idx]
					: positiveLimitStr[positiveLimitStr.length - 1 - idx];
			})();
			const targetInt = parseInt(targetChar);
			if (n > targetInt) return 0;
			if (n !== targetInt) {
				isDangerous = false;
			}
		}
		r += k * n * Math.pow(10, idx);
	}
	return r;
}

// const testcaseInput = 123;
// const testcaseOKResult = 321;
// const testcaseInput = -123;
// const testcaseOKResult = -321;
// const testcaseInput = 9;
// const testcaseOKResult = 9;
// const testcaseInput = 901000;
// const testcaseOKResult = 109;
const testcaseInput = -901000;
const testcaseOKResult = -109;
const result = reverse(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
