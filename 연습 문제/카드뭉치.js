const solution = (cards1, cards2, goal) => {
  for (let i = 0; i < goal.length; i++) {
    const target = goal[i];
    const cards1Pick = cards1[0];
    const cards2Pick = cards2[0];

    if (cards1Pick === target) {
      cards1.shift();
    } else if (cards2Pick === target) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
};

const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));
