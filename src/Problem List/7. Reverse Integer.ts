import { myLog } from "../util";

/* Tag: Medium */

/* 特殊条件是，不可以存储64位的整数，也就是能存的值，只能在[-2的31次方, 2的31次方-1]之间 */
/* 我的思路是
  -  将整数，从末尾一个一个掏出来，push进数组，形成reverse 
  -  再将数组转化成数字，从最大的数位开始转。
  -  如果最大的比限制的数大，就是超过，就返回0。
  -  否则就正常转。
  */
/* 比较细节的地方，就是正负数不一样、前导0的处理、是否超出最大值的比较处理 */
/* 我的做法：测试驱动开发，靠题库的测试用例来发现细节上的不足，然后打断点修补bug */

function converNumToReverseAbsArr(x: number) {
	if (x === 0) return [0];
	const k = x < 0 ? -1 : 1;
	const isNegative = k === -1;
	const arr = [];
	let isFirst = true;
	while (isNegative ? x < 0 : x > 0) {
		const n = (x % 10) * k;
		if ((isFirst && n !== 0) || !isFirst) {
			isFirst = false;
			arr.push(n);
		}
		isNegative ? (x += n) : (x -= n);
		x /= 10;
	}
	return arr;
}

function reverse(x: number): number {
	const positiveLimitStr = ((-Math.pow(2, 31) + 1) * -1).toString();
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
