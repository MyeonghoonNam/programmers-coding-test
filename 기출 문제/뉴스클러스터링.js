const str1 = 'FRANCE';
const str2 = 'french';

console.log(solution(str1, str2));

function solution(str1, str2) {
  const divide = (str) => {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      const element = str.slice(i, i + 2);

      if (element.match(/[A-Za-z]{2}/)) {
        result.push(element.toLowerCase());
      }
    }

    return result;
  };

  str1 = divide(str1);
  str2 = divide(str2);

  const set = new Set([...str1, ...str2]);

  let unionCount = 0;
  let interSectionCount = 0;

  set.forEach((el) => {
    const count1 = str1.filter((item) => item === el).length;
    const count2 = str2.filter((item) => item === el).length;

    unionCount += Math.max(count1, count2);
    interSectionCount += Math.min(count1, count2);
  });

  return unionCount === 0
    ? 65536
    : Math.floor((interSectionCount / unionCount) * 65536);
}
