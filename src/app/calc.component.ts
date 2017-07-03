import { Component } from '@angular/core';
import { Operation } from './calchistory';

@Component({
	selector: 'calc',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
	title : string;
	currentNumber : string;
	previousNumber : string;
	currentOperator : string;
	result : Number;
	history : Operation[];

	constructor() {
		this.title = "Calculette";
		this.currentNumber = "";
		this.previousNumber = "";
		this.currentOperator = "";
		this.result = 0;
		this.history = [];
	}

	reset() {
		this.currentNumber = "";
		this.previousNumber = "";
		this.currentOperator = "";
		this.result = 0;
	}

	addDigit(digit : string) {
		if (digit == '.' && this.currentNumber.indexOf('.') != -1) {
			console.log("already a dot");
		} else {
			this.currentNumber += digit;
		}
	}

	addOperator(operator : string) {
		this.currentOperator = operator;
		this.previousNumber = this.currentNumber;
		this.currentNumber = "";
	}

	clearOne() {
		this.currentNumber =  this.currentNumber.substring(0, this.currentNumber.length - 1);
	}

	equals() {
		let num1 = Number(this.previousNumber);
		let num2 = Number(this.currentNumber);

		switch (this.currentOperator) {
			case "+":
				this.result = num1 + num2;
				break;
			case "-":
				this.result = num1 - num2;
				break;
			case "*":
				this.result = num1 * num2;
				break;
			case "/":
				this.result = num1 / num2;
				break;
			default:
				// code...
				break;
		}
	var op = new Operation(num1, num2, this.currentOperator, this.result);
	this.history.unshift(op);
	this.reset()
	console.log(op);
	}

	getResult() {
    	return this.history[this.history.length-1];
	}

}