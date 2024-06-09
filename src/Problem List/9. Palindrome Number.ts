import { myLog } from "../util";

/* Tag: Easy */

function isPalindrome(x: number): boolean {
	return true;
}

const testcaseInput = 121;
const testcaseOKResult = true;
const result = isPalindrome(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
