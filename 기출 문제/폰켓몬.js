const nums = [3, 3, 3, 2, 2, 2];

console.log(solution(nums));

function solution(nums) {
  const phonekemon = new Set(nums).size;
  const limit = nums.length / 2;

  const result = phonekemon > limit ? limit : phonekemon;

  return result;
}
