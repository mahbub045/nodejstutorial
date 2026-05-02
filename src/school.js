const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started");
    setTimeout(() => {
      this.emit("bellRing", {
        time: "8:00 AM",
        day: "Monday",
      });
    }, 2000);
  }
}

module.exports = School;
