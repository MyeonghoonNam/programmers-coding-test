const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const solution = (begin, target, words) => {
  const visited = new Array(words.length).fill(false);
  let result = 50;

  const diff = (a, b) => {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }

    if (count === 1) {
      return true;
    } else {
      return false;
    }
  };

  const dfs = (word, step) => {
    if (result <= step) return;

    if (word === target) {
      result = Math.min(step, result);
    }

    for (let i = 0; i < words.length; i++) {
      if (diff(word, words[i]) && !visited[i]) {
        visited[i] = true;
        dfs(words[i], step + 1);
        visited[i] = false;
      }
    }
  };

  dfs(begin, 0);

  if (result === 50) {
    return 0;
  }

  return result;
};

console.log(solution(begin, target, words));
