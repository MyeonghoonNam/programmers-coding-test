const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];

console.log(solution(arr, query));

function solution(arr, query) {
  let result = [...arr];

  for (let i = 0; i < query.length; i += 1) {
    const idx = query[i];

    if (i % 2 === 0) {
      result = result.slice(0, idx + 1);
    } else if (i % 2 !== 0) {
      result = result.slice(idx);
    }
  }

  return result;
}
