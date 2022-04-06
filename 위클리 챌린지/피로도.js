function solution(k, dungeons) {
  const permutation = (dungeons, count) => {
    const length = dungeons.length;
    const selected = new Array(length).fill(false);
    const result = [];
    let temp = [];

    const dfs = (cnt) => {
      if (cnt === count) {
        result.push([...temp]);
        return;
      }

      for (let i = 0; i < length; i++) {
        if (selected[i] === true) continue;

        selected[i] = true;
        temp.push(dungeons[i]);
        dfs(cnt + 1);
        temp.pop();
        selected[i] = false;
      }
    };

    dfs(0);

    return result;
  };

  const list = permutation(dungeons, dungeons.length);
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    const adventure = list[i];
    let count = 0;
    let fatigue = k;

    for (let j = 0; j < adventure.length; j++) {
      const [necessary, exhaustion] = adventure[j];

      if (fatigue < necessary) break;

      count += 1;
      fatigue -= exhaustion;
    }

    result = Math.max(result, count);
  }

  return result;
}

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

console.log(solution(k, dungeons));
