const solution = (num_list) => {
  const even = [];
  const odd = [];

  num_list.forEach((number) => {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  });

  return [even.length, odd.length];
};

const num_list = [1, 3, 5, 7];
console.log(solution(num_list));
