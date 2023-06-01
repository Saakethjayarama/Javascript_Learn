const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("scream", () => {
  console.log("I hear a scream");
});

eventEmitter.emit("scream");
