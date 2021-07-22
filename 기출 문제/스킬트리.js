const skill = 'CBD';
const skill_trees = ['BACDE', 'CBADF', 'AE', 'BDA'];

console.log(solution(skill, skill_trees));

function solution(skill, skill_trees) {
  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const filterTree = skill_trees[i]
      .split('')
      .filter((el) => skill.includes(el))
      .join('');

    if (filterTree === skill.substring(0, filterTree.length)) {
      count++;
    }
  }

  return count;
}
