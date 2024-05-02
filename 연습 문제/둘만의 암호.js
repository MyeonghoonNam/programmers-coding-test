const s = "aukks";
const skip = "wbqd";
const index = 5;

console.log(solution(s, skip, index));

function solution(s, skip, index) {
  let result = "";

  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];
    const currentCode = current.charCodeAt();
    let targetCode = currentCode;

    for (let j = 0; j < index; j += 1) {
      targetCode += 1;

      if (targetCode > "z".charCodeAt()) {
        targetCode = "a".charCodeAt();
      }

      while (skip.includes(String.fromCharCode(targetCode))) {
        targetCode += 1;

        if (targetCode > "z".charCodeAt()) {
          targetCode = "a".charCodeAt();
        }
      }
    }

    const target = String.fromCharCode(targetCode);

    result += target;
  }

  return result;
}
