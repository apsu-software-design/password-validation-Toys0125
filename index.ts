import 'process';
import * as readline from 'readline';
import validatePassword = require('./passwordvalidation');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("What's your password: ");
rl.prompt();
rl.on("line",(answer:string)=>{
    if(validatePassword(answer)){
        console.log("Correct password");
        rl.close();
    } else {
        console.log("Incorrect password");
        rl.prompt();
    }
})