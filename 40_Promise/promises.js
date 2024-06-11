const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

// Promise without storing in variable
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async2 task resolved");
});

//

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "ARP", email: "arp@arp.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "ARP", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//

promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Akshay", password: "AAAAA" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});
// }).catch((error) => {
//   console.log("error");
// });

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Promise is an object. we cannot consume it like function promiseFive(), It should be promiseFive
    console.log(response);
  } catch (error) {
    console.log("Error");
  }
}

consumePromiseFive();

//

//

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

const res = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));