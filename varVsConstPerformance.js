const timer  = require('./util');

timer.clearTimer();
timer.tic();
for (i = 0; i < 10000000; i++) {
	let result1 = i;
}
console.log("Inside let time:", timer.toc(), "ms");

timer.clearTimer();
timer.tic();
let result2;
for (i = 0; i < 10000000; i++) {
	result2 = i;
}
console.log("Outside let time:", timer.toc(), "ms");

timer.clearTimer();
timer.tic();
for (i = 0; i < 10000000; i++) {
	const result1 = i;
}
console.log("Inside const time:", timer.toc(), "ms");

