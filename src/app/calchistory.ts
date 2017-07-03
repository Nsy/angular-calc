export class Operation {
	operator: string;
	number1 : Number;
	number2 : Number;
	result : Number;

	constructor(n1 : Number, n2 : Number, op : string, res : Number) {
		this.number1 = n1;
		this.number2 = n2;
		this.operator = op;
		this.result = res;
	}
}