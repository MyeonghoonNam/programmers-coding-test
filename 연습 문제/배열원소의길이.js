const solution = (strlist) => {
  const result = strlist.map((v) => v.length);

  return result;
};

const strlist = ["We", "are", "the", "world!"];
console.log(solution(strlist));
