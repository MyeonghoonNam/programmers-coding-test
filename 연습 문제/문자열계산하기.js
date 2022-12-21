const solution = (my_string) => {
  const stringArr = my_string.split(" ");
  let result = 0;
  let operator = "";

  for (let i = 0; i < stringArr.length; i++) {
    const value = stringArr[i];

    if (i === 0) {
      result += parseInt(value);
      continue;
    }

    switch (value) {
      case "+": {
        operator = true;
        continue;
      }
      case "-": {
        operator = false;
        continue;
      }
      default: {
        break;
      }
    }

    if (operator) {
      result += parseInt(value);
    } else {
      result -= parseInt(value);
    }
  }

  return result;
};

const my_string = "3 + 4";
console.log(solution(my_string));
