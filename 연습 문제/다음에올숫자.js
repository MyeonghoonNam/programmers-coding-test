const solution = (common) => {
  if (common[2] - common[1] === common[1] - common[0]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
};

const common = [1, 2, 3, 4];

console.log(solution(common));
