const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 10000; i++) {
		if (i != 9000 && i != 5000 && i != 1000) {
			const obj = {
				id: i + 1,
				firstName: "Joaquin",
				lastName: "Hidalgo",
				dob: "02.13.1984",
				address: "536 W Addison St. Apt 389, Chicago, IL, 60613",
				type: 15
			};
			list.push(obj);
		} else {
			const obj = {
				id: i + 1,
				firstName: "Element",
				lastName: "ToFind",
				dob: "09.09.1999",
				address: "My address of the element to be found",
				type: 0
			};
			list.push(obj);
		}
		
	}
	return list;
}

let count1 = 0;
const data1 = addFakeData();
timer.clearTimer();
timer.tic();
for (let i = 0; i < data1.length; i++) {
	if (data1[i].type == 14) {
		count1 = 2;
	} else if (data1[i].type == 1) {
		count1 = 3;
	} else if (data1[i].type == 2) {
		count1 = 4;
	} else if (data1[i].type == 3) {
		count1 = 5;
	} else if (data1[i].type == 4) {
		count1 = 6;
	} else if (data1[i].type == 5) {
		count1 = 7;
	} else if (data1[i].type == 6) {
		count1 = 8;
	} else if (data1[i].type == 7) {
		count1 = 9;
	} else if (data1[i].type == 8) {
		count1 = 10;
	} else if (data1[i].type == 9) {
		count1 = 11;
	} else if (data1[i].type == 10) {
		count1 = 12;
	} else if (data1[i].type == 11) {
		count1 = 13;
	} else if (data1[i].type == 12) {
		count1 = 14;
	} else if (data1[i].type == 13) {
		count1 = 15;
	} else if (data1[i].type == 0) {
		count1 = 16;
	} else {
		count1 = 1;
	}
}
console.log("BAD IF time:", timer.toc(), "ms");

let count2 = 0;
const data2 = addFakeData();
timer.clearTimer();
timer.tic();
for (let i = 0; i < data2.length; i++) {
	if (data2[i].type == 15) {
		count2 = 2;
	} else if (data2[i].type == 0) {
		count2 = 3;
	} else if (data2[i].type == 2) {
		count2 = 4;
	} else if (data2[i].type == 3) {
		count2 = 5;
	} else if (data2[i].type == 4) {
		count2 = 6;
	} else if (data2[i].type == 5) {
		count2 = 7;
	} else if (data2[i].type == 6) {
		count2 = 8;
	} else if (data2[i].type == 7) {
		count2 = 9;
	} else if (data2[i].type == 8) {
		count2 = 10;
	} else if (data2[i].type == 9) {
		count2 = 11;
	} else if (data2[i].type == 10) {
		count2 = 12;
	} else if (data2[i].type == 11) {
		count2 = 13;
	} else if (data2[i].type == 12) {
		count2 = 14;
	} else if (data2[i].type == 13) {
		count2 = 15;
	} else if (data2[i].type == 14) {
		count2 = 16;
	} else {
		count2 = 1;
	}
}
console.log("GOD IF time:", timer.toc(), "ms");

let count3 = 0;
const data3 = addFakeData();
timer.clearTimer();
timer.tic();
for (let i = 0; i < data3.length; i++) {
	switch(data3[i].type) {
	case 1:
		count3 = 3;
		break;
	case 2:
		count3 = 4;
		break;
	case 3:
		count3 = 5;
		break;
	case 4:
		count3 = 6;
		break;
	case 5:
		count3 = 7;
		break;
	case 6:
		count3 = 8;
		break;
	case 7:
		count3 = 9;
		break;
	case 8:
		count3 = 10;
		break;
	case 9:
		count3 = 11;
		break;
	case 10:
		count3 = 12;
		break;
	case 11:
		count3 = 13;
		break;
	case 12:
		count3 = 14;
		break;
	case 13:
		count3 = 15;
		break;
	case 14:
		count3 = 16;
		break;
	case 0:
		count3 = 2;
		break;
	default:
		count3 = 1;
		break;
	}
}
console.log("BAD SWITCH time:", timer.toc(), "ms");

let count4 = 0;
const data4 = addFakeData();
timer.clearTimer();
timer.tic();
for (let i = 0; i < data4.length; i++) {
	switch(data4[i].type) {
	case 15:
		count4 = 3;
		break;
	case 0:
		count4 = 2;
		break;
	case 2:
		count4 = 4;
		break;
	case 3:
		count4 = 5;
		break;
	case 4:
		count4 = 6;
		break;
	case 5:
		count4 = 7;
		break;
	case 6:
		count4 = 8;
		break;
	case 7:
		count4 = 9;
		break;
	case 8:
		count4 = 10;
		break;
	case 9:
		count4 = 11;
		break;
	case 10:
		count4 = 12;
		break;
	case 11:
		count4 = 13;
		break;
	case 12:
		count4 = 14;
		break;
	case 13:
		count4 = 15;
		break;
	case 14:
		count4 = 16;
		break;
	default:
		count4 = 1;
		break;
	}
}
console.log("GOD SWITCH time:", timer.toc(), "ms");

