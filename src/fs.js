const fs = require("fs");

fs.writeFileSync("src/hello.txt", "Hello, World!");
fs.appendFileSync("src/hello.txt", " Welcome to Node.js file system module.");

const data = fs.readFileSync("src/hello.txt");
console.log(data);

const data = fs.readFileSync("src/hello.txt", "utf-8");
console.log(data);
