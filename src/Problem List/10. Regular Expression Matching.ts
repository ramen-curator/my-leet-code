import { myLog } from "../util";

/* Tag: Hard */

function isMatch(s: string, p: string): boolean {
	return true;
}

const testcaseInput = "aa";
const testcaseInput1 = "a";
const testcaseOKResult = false;
const result = isMatch(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
