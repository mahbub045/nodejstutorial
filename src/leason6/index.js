const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/readMe.txt`, "utf8");

