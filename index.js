"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("process");
const readline = require("readline");
const validatePassword = require("./passwordvalidation");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt("What's your password: ");
rl.prompt();
rl.on("line", (answer) => {
    if (validatePassword(answer)) {
        console.log("Correct password");
        rl.close();
    }
    else {
        console.log("Incorrect password");
        rl.prompt();
    }
});
//# sourceMappingURL=index.js.map