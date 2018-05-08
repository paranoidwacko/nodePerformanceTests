const timer  = require('./util');

timer.clearTimer();
timer.tic();
let result1 = 0;
for (i = 0; i < 10000000; i++) {
	result1 = result1 + i;
}
console.log("Non inline math time:", timer.toc(), "ms");

timer.clearTimer();
timer.tic();
let result2 = 0;
for (i = 0; i < 10000000; i++) {
	result2 += i;
}
console.log("inline math time:", timer.toc(), "ms");

