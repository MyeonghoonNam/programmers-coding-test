const people = [70, 50, 80, 50];
const limit = 100;

console.log(solution(people, limit));

function solution(people, limit) {
  let count = 0;

  people.sort((a, b) => b - a);

  let first = 0;
  let last = people.length - 1;

  while (first < last) {
    const sum = people[first] + people[last];

    if (sum > limit) {
      first++;
    } else {
      first++;
      last--;
    }

    count++;
  }

  if (first === last) count++;

  return count;
}
