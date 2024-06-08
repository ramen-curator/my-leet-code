export const myLog = (...arg: any[]) => {
	console.log("%c" + arg.toString(), "color: red");
};

export class SignedInt32Limit {
	public digits: number[] = [];
	public sign: 1 | -1 = 1;

	public readonly POSITIVE_LIMIT = (-Math.pow(2, 30) * 2 + 1) * -1;
	public readonly NEGATIVE_LIMIT = -Math.pow(2, 30) * 2;

	public checkOutOfBounds(): boolean {
		const positiveLimitStr = this.POSITIVE_LIMIT.toString();
		const negativeLimitStr = this.NEGATIVE_LIMIT.toString();
		const isNegative = this.sign === -1;

		const limitLength = isNegative
			? negativeLimitStr.length - 1
			: positiveLimitStr.length;
		if (this.digits.length > limitLength) return true;
		if (this.digits.length < limitLength) return false;
		for (let i = 0; i < this.digits.length; i++) {
			const v1 = this.digits[i];
			const v2 = parseInt(
				isNegative ? negativeLimitStr[i + 1] : positiveLimitStr[i]
			);
			if (v1 > v2) return true;
			if (v1 === v2) continue;
			return false;
		}
		return false;
	}
	public toInteger() {
		let resultValue = 0;
		for (let i = 0; i < this.digits.length; i++) {
			const v = this.digits[i];
			resultValue += v * Math.pow(10, this.digits.length - 1 - i);
		}
		return resultValue * this.sign;
	}
}
