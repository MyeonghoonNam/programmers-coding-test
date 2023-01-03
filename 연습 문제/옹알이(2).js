const solution = (babbling) => {
  let result = 0;

  for (let word of babbling) {
    // 연속성 체크
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 처음부터 끝까지 아래 조건에 해당하는 단어만 체크
    if (/^(aya|ye|woo|ma)+$/g.test(word)) result++;
  }

  return result;
};

const babbling = ["ayawaya", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling));
