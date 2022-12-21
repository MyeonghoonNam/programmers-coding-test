const solution = (quiz) => {
  const result = [];

  quiz.forEach((q) => {
    const stringArr = q.split(" ");
    let sum = 0;
    let operator = "";

    for (let i = 0; i < stringArr.length; i++) {
      const value = stringArr[i];

      if (i === 0) {
        sum += parseInt(value);
        continue;
      }

      switch (value) {
        case "+": {
          operator = "plus";
          continue;
        }
        case "-": {
          operator = "minus";
          continue;
        }
        case "=": {
          operator = "equl";
          continue;
        }
        default: {
          break;
        }
      }

      switch (operator) {
        case "plus": {
          sum += parseInt(value);
          break;
        }
        case "minus": {
          sum -= parseInt(value);
          break;
        }
        case "equl": {
          result.push(sum === parseInt(value) ? "O" : "X");
          break;
        }
        default: {
          break;
        }
      }
    }
  });

  return result;
};

const solution2 = (quiz) => {
  return quiz.map((q) => {
    const [calc, result] = q.split(" = ");
    const operator = calc.includes("+") ? 1 : -1;
    const [num1, num2] = calc.split(operator === 1 ? " + " : " - ");

    return +num1 + +num2 * operator === +result ? "O" : "X";
  });
};

const quiz = ["3 - 4 = -3", "5 + 6 = 11"];

console.log(solution(quiz));
console.log(solution2(quiz));
