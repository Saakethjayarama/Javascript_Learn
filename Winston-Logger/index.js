// console.log("Hello");
// console.info("Text info");
// console.warn("Text warning");
// console.error("Text error");
// console.error(new Error("Something ssly went wron"));

const logger = require("./logger");

logger.info("Text info", {label: "saaketh"});
logger.warn("Text warning");
logger.error("Text error");
logger.debug("Text debug");
logger.error(new Error("Smething ssrs"));
