const emoji = require("node-emoji");
const { version } = require("./package.json");
console.log(`The current app version is ${version} ${emoji.get("coffee")}`);
