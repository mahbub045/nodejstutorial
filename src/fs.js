const fs = require("fs");

fs.readFile("src/hello.txt", (err, data) => {
  console.log(data.toString());
});

console.log("hello");
