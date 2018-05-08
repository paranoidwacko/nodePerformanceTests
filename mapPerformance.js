const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 1000000; i++) {
		if (i != 900000 && i != 500000 && i != 100000) {
			const obj = {
				id: i + 1,
				firstName: "Joaquin",
				lastName: "Hidalgo",
				dob: "02.13.1984",
				address: "536 W Addison St. Apt 389, Chicago, IL, 60613"
			};
			list.push(obj);
		} else {
			const obj = {
				id: i + 1,
				firstName: "Element",
				lastName: "ToFind",
				dob: "09.09.1999",
				address: "My address of the element to be found"
			};
			list.push(obj);
		}
		
	}
	return list;
}

const data1 = addFakeData();
timer.clearTimer();
timer.tic();
data1.map(item => item.address = "Changed address - 1");
console.log("* Test Item 1:", data1[5000])
console.log("MAP time:", timer.toc(), "ms");

const data2 = addFakeData();
timer.clearTimer();
timer.tic();
for (i = 0; i < data2.length; i++) {
	data2[i].address = "Changed address - 2"
}
console.log("* Test Item 2:", data2[5000])
console.log("SIMPLE FOR time:", timer.toc(), "ms");
