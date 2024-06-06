import { myLog } from "../util";

/* Tag: Medium */

function convert(str: string, numRows: number): string {
	let result: string[][] = [];
	let i = 0;
	let j = 0;
	let k = 0;
	let isLine = true;

	for (const s of str) {
		if (isLine) {
			if (j < numRows) {
				if (result[k] === undefined) result[k] = [];
				result[k].push(s);
				j++;
				if (j === numRows) {
					isLine = false;
				}
			} else {
				console.error("something error");
			}
		} else {
		}
	}

	while (i !== str.length) {
		if (isLine) {
			let tmp = [];
			while (j < numRows) {
				tmp.push(str[i]);
				if (i !== str.length) {
					i++;
					j++;
				}
			}
			result.push(tmp);
		} else {
			if (j !== numRows) {
			}
		}
	}

	return "";
}
const testcaseInput = "PAYPALISHIRING";
const testcaseInput1 = 3;
const testcaseOKResult = "PAHNAPLSIIGYIR";
const result = convert(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
