const solution = (babbling) => {
  let result = 0;

  for (let word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
    if (/^(aya|ye|woo|ma)+$/g.test(word)) result++;
  }

  return result;
};

const babbling = ["ayawaya", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling));
