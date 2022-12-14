const solution = (num_list, n) => {
  const result = [];

  for (let i = 0; i < num_list.length; i += n) {
    const arr = [];

    for (let j = i; j < i + n; j++) {
      arr.push(num_list[j]);
    }

    result.push(arr);
  }

  return result;
};

const solution2 = (num_list, n) => {
  const result = [];

  while (num_list.length) {
    result.push(num_list.splice(0, n));
  }

  return result;
};

const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;

console.log(solution(num_list, n));
// console.log(solution2(num_list, n));
