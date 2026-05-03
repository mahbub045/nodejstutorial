const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadableStream = fs.createReadStream(
    __dirname + "/readMe.txt",
    "utf-8",
  );
  myReadableStream.pipe(res);
});

server.listen(3000);
console.log("This sever is running on port 3000");
