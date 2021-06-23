const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));

function solution(citations) {
  citations.sort((a, b) => b - a);

  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }

  return i;
}
