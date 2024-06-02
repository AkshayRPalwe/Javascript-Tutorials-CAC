const user = {
  username: "ARP",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website.`); // this --> current context
    console.log(this);
    // {
    //     username: 'Sam',
    //     price: 999,
    //     welcomeMessage: [Function: welcomeMessage]
    //   }
  },
};

// user.welcomeMessage(); // ARP, Welcome to website.
// user.username = "Sam";
// user.welcomeMessage(); // Sam, Welcome to website.

// console.log(this); // {}

function chai() {
  let username = "Akshay";
  console.log(this.username); // undefined --> Cant use "this" in functions
  console.log(this);
  //   <ref *1> Object [global] {
  //     global: [Circular *1],
  //     clearImmediate: [Function: clearImmediate],
  //     setImmediate: [Function: setImmediate] {
  //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //     },
  //     clearInterval: [Function: clearInterval],
  //     clearTimeout: [Function: clearTimeout],
  //     setInterval: [Function: setInterval],
  //     setTimeout: [Function: setTimeout] {
  //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //     },
  //     queueMicrotask: [Function: queueMicrotask],
  //     structuredClone: [Function: structuredClone],
  //     atob: [Getter/Setter],
  //     btoa: [Getter/Setter],
  //     performance: [Getter/Setter],
  //     fetch: [Function: value],
  //     navigator: [Getter],
  //     crypto: [Getter]
  //   }
}

chai();
