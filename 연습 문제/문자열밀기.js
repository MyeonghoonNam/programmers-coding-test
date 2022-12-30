const solution = (A, B) => {
  if (A === B) {
    return 0;
  }

  const arrA = A.split("");
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    arrA.unshift(arrA.pop());
    result += 1;

    if (arrA.join("") === B) {
      return result;
    }
  }

  return -1;
};

const A = "hello";
const B = "ohell";
console.log(solution(A, B));
