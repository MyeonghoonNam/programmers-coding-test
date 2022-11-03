const solution = (ingredient) => {
  const stack = [];
  let count = 0;

  ingredient.forEach((element) => {
    stack.push(element);

    if (stack.length >= 4) {
      const combination = stack.slice(-4).join("");

      if (combination === "1231") {
        for (let i = 0; i < 4; i++) {
          stack.pop();
        }

        count += 1;
      }
    }
  });

  return count;
};

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));
