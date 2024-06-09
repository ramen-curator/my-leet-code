import { myLog } from "../util";

/* Tag: Hard */

function isMatch(str: string, pattern: string): boolean {
	let i = 0;
	let j = 0;
	interface IfObj {
		i: number;
		j: number;
		n: number[]; // *的可能个数的集合。
	}
	const ifObjList: IfObj[] = [];
	const checkReallyFalse = () => {
		if (ifObjList.length === 0) return true;
		if (ifObjList[0].n.length === 0) return true;
		return false;
	};
	interface NowIfObj extends Pick<IfObj, "i" | "j"> {
		n: number;
	}
	const popNowIf = (): NowIfObj | null => {
		while (ifObjList.length !== 0) {
			let currentIfObj = ifObjList[ifObjList.length - 1];
			if (currentIfObj.n.length === 0) {
				ifObjList.pop();
				continue;
			}
			return {
				i: currentIfObj.i,
				j: currentIfObj.j,
				n: currentIfObj.n.pop()!,
			};
		}
		return null;
	};
	const restoreEnv = () => {
		const nowIf = popNowIf();
		if (nowIf === null) {
			throw new Error("Something wrong");
		}
		i = nowIf.i + nowIf.n;
		j = nowIf.j;
		i++;
		j++;
	};
	while (i !== str.length || j !== pattern.length) {
		const p = pattern[j];
		const s = str[i];
		if (p === ".") {
			if (s === undefined) {
				if (checkReallyFalse()) return false;
				restoreEnv();
				continue;
			}
			i++;
			j++;
			continue;
		}
		if (p !== "*") {
			if (s === p) {
				i++;
				j++;
				continue;
			} else {
				if (checkReallyFalse()) return false;
				restoreEnv();
				continue;
			}
		}
		// p === "*"
		const p1 = pattern[j + 1];
		if (p1 === undefined) return true;
		if (p1 === "*") {
			j++;
			continue;
		}
		// 如果下一个位置是有字母的，那么这怎么办？
		// 如果p的下一个位置是'a'，那么str是找最近的一个a，还是最远的一个a？
		// 此时是0，或1，或多。什么时候是0？什么时候是1？什么时候是多？
		// 不管是0，还是1，还是多，最终一定是j++。
		// 0的时候不处理，1的时候i+=1，多的时候i+=多。
		// 那么现在的问题是，什么时候是0，什么时候是1，什么时候是多？多的话是多少？
		// 0的情况
		// 1. str[i]===pattern[j+1];
		//    1.1 str[i] 是undefine，pattern[j+1]也是undefined，既"*"在pattern的最后一个。此时"*"是0个。
		//    1.2 str[i] 是普通字符，假设是'a'，pattern[j+1]也是'a'。此时"*"可能是0个。
		//      1.2.1 什么时候这个情况下，"*"不是0个？存在str[i+x]===pattern[j+1]的时候，"*"可能是x个。
		//        1.2.1.1 什么情况下，存在str[i+x]===pattern[j+1]的时候，"*"不是x个？
		//             1.2.1.1.1 在str[i+x]===pattern[j+1]时，后面的模式不匹配时，"*"不是x个。
		//    同理，在后面的模式不匹配时，"*"不是0个。
		//    也就是说，*的0个、x个，两个假设的最后，都不能符合结果的时候，才能设为假。否则设为真。

		// 目前走到这里，表示p1不是undefined，也不是*，那一定是'.'或者字母。
		// 找出接下来的字符串中，跟p1符合的东西。记住编号，也就是i+x，这个x就是'*'的可能值。
		// build ifObj
		const ifObj: IfObj = { i, j, n: [] };
		let i1 = i;
		let leftStr = (str ?? "").slice(i1);
		let x: number;
		do {
			x = [...leftStr].findIndex((item) => item === p1 || p1 === ".");
			if (x !== -1) {
				ifObj.n.push(x - i1);
				leftStr = str.slice(x + 1);
			}
		} while (x !== -1);

		if (ifObj.n.length === 0) {
			if (checkReallyFalse()) return false;
			restoreEnv();
			continue;
		}
		ifObjList.push(ifObj);
		restoreEnv();
	}

	return true;
}

const testcaseInput = "aa";
const testcaseInput1 = "a";
const testcaseOKResult = false;
const result = isMatch(testcaseInput, testcaseInput1);
myLog("result: " + result);
myLog("isOK? " + (testcaseOKResult === result).toString());
export default {};
