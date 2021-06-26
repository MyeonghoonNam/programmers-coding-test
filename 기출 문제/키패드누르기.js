const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

console.log(solution(numbers, hand));

function solution(numbers, hand) {
  let result = '';

  const pad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let leftPos = '*';
  let rightPos = '#';

  const distCalculate = (num) => {
    const leftDist =
      Math.abs(pad[leftPos][0] - pad[num][0]) +
      Math.abs(pad[leftPos][1] - pad[num][1]);

    const rightDist =
      Math.abs(pad[rightPos][0] - pad[num][0]) +
      Math.abs(pad[rightPos][1] - pad[num][1]);

    if (leftDist === rightDist) {
      return hand === 'left' ? 'L' : 'R';
    }

    return leftDist < rightDist ? 'L' : 'R';
  };

  numbers.forEach((num) => {
    if (num % 3 === 1) {
      result += 'L';
      leftPos = String(num);
    } else if (num !== 0 && num % 3 === 0) {
      result += 'R';
      rightPos = String(num);
    } else {
      result += distCalculate(String(num));

      if (result[result.length - 1] === 'L') {
        leftPos = String(num);
      } else {
        rightPos = String(num);
      }
    }
  });

  return result;
}
