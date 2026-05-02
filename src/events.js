const School = require("./school");

const school = new School();
school.on("bellRing", ({ time, day }) => {
  console.log(
    `Bell rang at ${time}, students should go to class. Today is: ${day}`,
  );
});

school.startPeriod();
