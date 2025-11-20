const sum = require("./index");

if (sum(2, 2) !== 4) {
  throw new Error("Test failed: sum(2,2) must equal 4");
}

console.log("All tests passed!");
