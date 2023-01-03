const solution = (survey, choices) => {
  const CHARACTER_TYPES = ["RT", "CF", "JM", "AN"];
  const CHARACTER_SCORE = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((s, index) => {
    const [disagree, agree] = [...s];
    const choice = choices[index];

    CHARACTER_SCORE[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  let result = CHARACTER_TYPES.map(([a, b]) =>
    CHARACTER_SCORE[b] > CHARACTER_SCORE[a] ? b : a
  ).join("");

  return result;
};

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));
