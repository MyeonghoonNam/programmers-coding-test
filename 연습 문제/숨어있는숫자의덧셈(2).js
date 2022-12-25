const solution = (my_string) => {
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    let number = "";

    while (Number.isInteger(Number(my_string[i]))) {
      number += my_string[i];
      i++;
    }

    result += Number(number);
  }

  return result;
};

const my_string = "aAb1B2cC34oOp";
console.log(solution(my_string));
