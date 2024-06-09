import { myLog } from "../util";

/* Tag: Easy */

function isPalindrome(x: number): boolean {
	const a = [...x.toString()];
	while (a.length > 1) {
		const v1 = a.pop();
		const v2 = a.shift();
		if (v1 !== v2) return false;
	}
	return true;
}

const testcaseInput = 121;
const testcaseOKResult = true;
const result = isPalindrome(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
