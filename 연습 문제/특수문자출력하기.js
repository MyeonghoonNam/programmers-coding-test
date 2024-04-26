const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  // 백틱안의 특수문자 표시 기호 \
  console.log(`!@#$%^&*(\\'"<>?:;`);
});
