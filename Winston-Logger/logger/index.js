const { env } = require("process");
const devLogger = require("./devLogger");
const prodLogger = require("./prodLogger");
const testLogger = require('./testLogger')

let logger = null;

if (process.env.NODE_ENV == "development") {
  logger = devLogger();
} else {
  logger = prodLogger();
}

module.exports = testLogger('saaketh');
