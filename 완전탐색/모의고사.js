const answers = [1, 3, 2, 4, 2];

console.log(solution(answers));

function solution(answers) {
  const result = [];

  const human1 = [1, 2, 3, 4, 5];
  const human2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const human3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = (test) => {
    const testResult = answers.filter((r, i) => {
      return r === test[i % test.length];
    }).length;

    return testResult;
  };

  const human1_result = score(human1);
  const human2_result = score(human2);
  const human3_result = score(human3);

  const maxScoreHuman = Math.max(human1_result, human2_result, human3_result);

  if (maxScoreHuman === human1_result) result.push(1);
  if (maxScoreHuman === human2_result) result.push(2);
  if (maxScoreHuman === human3_result) result.push(3);

  return result;
}
