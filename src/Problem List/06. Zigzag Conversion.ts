import { myLog } from "../util";

/* Tag: Medium */

/* 判题说我的解法不够快 */
/* 感受：
 - 2024.06.06 对于指针的控制水平
 - 2024.06.07 光标的移动
 */

function convert(str: string, numRows: number): string {
	const arr: string[][] = [];
	let x = 0;
	let y = 0;
	let isDown = true;

	for (const s of str) {
		if (!arr[y]) arr[y] = [];
		arr[y][x] = s;
		updateNextPoint();
	}

	return sumStr(arr);

	function updateNextPoint() {
		if (numRows === 1) {
			x++;
			return;
		}
		if (isDown) {
			y++;
		} else {
			x++;
			y--;
		}
		if (y === 0) {
			isDown = true;
		}
		if (y === numRows) {
			x++;
			y -= 2;
			isDown = numRows === 2;
		}
	}
	function sumStr(arr: string[][]) {
		let r = "";
		arr.forEach((a) => {
			a.forEach((char) => {
				if (char !== undefined) {
					r += char;
				}
			});
		});
		return r;
	}
}

// const testcaseInput = "PAYPALISHIRING";
// const testcaseInput1 = 3;
// const testcaseOKResult = "PAHNAPLSIIGYIR";
// const testcaseInput = "AB";
// const testcaseInput1 = 1;
// const testcaseOKResult = "AB";
// const testcaseInput = "ABC";
// const testcaseInput1 = 2;
// const testcaseOKResult = "ACB";
// const testcaseInput = "ABCD";
// const testcaseInput1 = 2;
// const testcaseOKResult = "ACBD";
const testcaseInput = "ABCDE";
const testcaseInput1 = 2;
const testcaseOKResult = "ACEBD";
const result = convert(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
