const solution = (numbers, direction) => {
  switch (direction) {
    case "left": {
      numbers.push(numbers.shift());
      break;
    }
    case "right": {
      numbers.unshift(numbers.pop());
      break;
    }
    default:
      break;
  }

  return numbers;
};

const numbers = [1, 2, 3];
const direction = "right";

console.log(solution(numbers, direction));
