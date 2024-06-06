import { myLog } from "../util";

/* Tag: Medium */

function convert(s: string, numRows: number): string {
	return "";
}
const testcaseInput = "PAYPALISHIRING";
const testcaseInput1 = 3;
const testcaseOKResult = "PAHNAPLSIIGYIR";
const result = convert(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
