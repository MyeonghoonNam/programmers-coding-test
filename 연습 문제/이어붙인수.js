const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));

function solution(num_list) {
  let num1 = "";
  let num2 = "";

  for (let i = 0; i < num_list.length; i++) {
    const number = num_list[i];

    if (number % 2 !== 0) {
      num1 += String(number);
    } else {
      num2 += String(number);
    }
  }

  const result = Number(num1) + Number(num2);

  return result;
}
