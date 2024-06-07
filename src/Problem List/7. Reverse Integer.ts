import { myLog } from "../util";

/* Tag: Medium */

function reverse(x: number): number {
	const s = [...x.toString()].reverse();
	if (s.includes("-")) {
		s.pop();
		s.unshift("-");
	}
	const r = parseInt(s.join(""));
	if (r > Math.pow(2, 31) - 1 || r < -Math.pow(2, 31)) return 0;
	return r;
}

const testcaseInput = 123;
const testcaseOKResult = 321;
const result = reverse(testcaseInput);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
