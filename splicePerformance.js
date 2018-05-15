const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 80000; i++) {
		if (i != 9000) {
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
const dataSpliced1 = data1.splice(50, 30000);
console.log("Data1Length", data1.length, "Data1SplicedLength", dataSpliced1.length);
console.log("SPLICE time:", timer.toc(), "ms");

const data2 = addFakeData();
timer.clearTimer();
timer.tic();
const dataSpliced2 = [];
const data2After = [];
for (let i = 0; i < data2.length; i++) {
	if (i < 50 || i >= 30050) {
		data2After.push(data2[i]);
	} else {
		dataSpliced2.push(data2[i]);
	}
}
console.log("Data2Length", data2After.length, "Data2SplicedLength", dataSpliced2.length);
console.log("MANUAL time:", timer.toc(), "ms");
