// Return Value Optimization

const timer  = require('./util');

class calculatorRVO {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	multiply() {
		return this.a * this.b;
	}
}

class calculatorNonRVO {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	multiply() {
		const c = this.a * this.b;
		return c;
	}
}

function nonRVOFunction(a, b) {
	const calculator = new calculatorNonRVO(a, b);
	const result = calculator.multiply();
	return result;
}

function RVOFunction(a, b) {
	return (new calculatorRVO(a, b)).multiply();
}


function NonRVOTest() {
	timer.clearTimer();
	timer.tic();
	for (i = 0; i < 1000000; i++) {
		const c = nonRVOFunction(99, 100);
	}
	return timer.toc();
}

function RVOTest() {
	timer.clearTimer();
	timer.tic();
	for (i = 0; i < 1000000; i++) {
		const c = RVOFunction(99, 100);
	}
	return timer.toc();
}

let nonRVOTime = 0;
let RVOTime = 0;
for (i = 0; i < 1000; i++) {
	nonRVOTime += NonRVOTest();
	RVOTime += RVOTest();
}

console.log("Non RVO time:", nonRVOTime, "ms");
console.log("RVO time:", RVOTime, "ms");