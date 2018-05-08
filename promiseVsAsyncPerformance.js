const timer  = require('./util');

function addFakeData() {
  const list = [];
  for (i = 0; i < 1000000; i++) {
    if (i != 900000) {
    // if (i != 1000000) {
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
function searchList(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i].firstName == "Element" && data[i].lastName == "ToFind") {
      return data[i].id;
    }
  }
}


function myPromise() {
  return new Promise((resolve, reject) => {
    resolve(searchList(addFakeData()));
  });
}

async function myAwait() {
  let response = await searchList(addFakeData());
  console.log("TIME FOR AWAIT:", timer.toc(), "ms", response);
  console.log("*** END AWAIT TEST");
}


console.log("*** START PROMISE TEST");
timer.clearTimer();
timer.tic();
myPromise()
.then((data) => {
  console.log("TIME FOR MY PROMISES:", timer.toc(), "ms", data);
  console.log("*** END PROMISE TEST");

  console.log("*** START AWAIT TEST");
  timer.clearTimer();
  timer.tic();
  myAwait();
})
.catch((error) => {
  console.log("*** ERROR-1");
});



