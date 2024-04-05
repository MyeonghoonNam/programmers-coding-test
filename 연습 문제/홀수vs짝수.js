const num_list = [4, 2, 6, 1, 7, 6];

console.log(solution(num_list));

function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;

  num_list.map((v, i) => {
    i % 2 !== 0 ? (oddSum += v) : (evenSum += v);
  });

  const result = Math.max(oddSum, evenSum);

  return result;
}
