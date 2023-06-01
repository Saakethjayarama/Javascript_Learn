const winston = require("winston");

function prodLogger() {
  let logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  });

  logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      // winston.format.colorize(),
      winston.format.errors(),
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: { service: "test-service" },
    transports: [new winston.transports.Console()],
  });

  return logger;
}

module.exports = prodLogger;
