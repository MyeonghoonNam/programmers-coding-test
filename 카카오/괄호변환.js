/**
 * 균형잡힌 괄호 문자열 : '(', ')'의 개수가 같은 경우
 * 올바른 괄호 문자열: '(', ')'의 개수가 같고 짝도 모두 맞는 경우
 *
 *
 * 요구사항: 균형잡힌 괄호 문자열을 올바른 괄호 문자열로 변환결과 도출
 */

const solution = (p) => {
  let result = "";

  if (p === "") return result;

  const divide_index = getDivideIndex(p);
  const u = p.slice(0, divide_index + 1);
  const v = p.slice(divide_index + 1);

  if (isPossibleString(u)) {
    result = u + solution(v);
  } else {
    result += "(";
    result += solution(v);
    result += ")";

    const temp = u.slice(1, u.length - 1).split("");
    for (let i = 0; i < temp.length; i++) {
      const char = temp[i];

      if (char === "(") {
        temp[i] = ")";
      } else {
        temp[i] = "(";
      }
    }

    result += temp.join("");
  }

  return result;
};

const isPossibleString = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  const result = stack.length === 0 ? true : false;
  return result;
};

const getDivideIndex = (str) => {
  let idx = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      idx += 1;
    } else {
      idx -= 1;
    }

    if (idx === 0) return i;
  }
};

const p = "(()())()";
console.log(solution(p));
