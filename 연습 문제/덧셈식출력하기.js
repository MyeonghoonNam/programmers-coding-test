const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const number1 = Number(input[0]);
  const number2 = Number(input[1]);

  console.log(`${number1} + ${number2} = ${number1 + number2}`);
});
