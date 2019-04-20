const acronym = require("../src/acronym").handler; // require the `index.js` file from the same directory.

acronym("for your information", (err, resp) => {
  if (err) {
    console.log(err);
  }
  console.log(resp);
});

let promise = acronym("too long description read");
promise.then(data => console.log(data));

acronym("")
  .then(data => console.log(data))
  .catch(err => console.log("err: ", err));

const add = (a, b) => a + b;

acronym(add)
  .then(data => console.log(data))
  .catch(err => console.log("err: ", err));
