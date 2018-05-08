const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 10000000; i++) {
		const obj = {
			id: i + 1,
			firstName: "Joaquin",
			lastName: "Hidalgo",
			dob: "02.13.1984",
			address: "536 W Addison St. Apt 389, Chicago, IL, 60613"
		};
		list.push(obj);
	}
	return list;
}

const data = addFakeData();
timer.clearTimer();
timer.tic();
data.forEach(function(obj) {
	if (obj.id === 150) {
		console.log("Foreach - 150");
	} else {
		obj.id = obj.id
	}
});
console.log("FOREACH time:", timer.toc(), "ms");

timer.clearTimer();
timer.tic();
for (i = 0; i < data.length; i++) {
	if (data[i].id === 150) {
		console.log("Simple for - 150");
	} else {
		data[i].id = data[i].id;
	}
}
console.log("SIMPLE FOR time:", timer.toc(), "ms");

