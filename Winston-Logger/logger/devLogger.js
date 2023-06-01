const winston = require("winston");

function devLogger() {
  let logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  });

  const myFormat = winston.format.printf(
    ({ level, message, timestamp, stack, label }) => {
      return `${timestamp} ${label}  ${level}: ${stack || message}`;
    }
  );

  logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.errors({ stack: true }),
      winston.format.timestamp({ format: "YYYY:MM:DD::HH:mm:ss" }),
      myFormat
    ),
    transports: [new winston.transports.Console()],
  });

  return logger;
}

module.exports = devLogger;
