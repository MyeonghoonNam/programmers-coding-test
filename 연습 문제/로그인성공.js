const solution = (id_pw, db) => {
  const [id, pw] = id_pw;

  for (let [i, p] of db) {
    if (i === id && p === pw) return "login";
    if (i === id) return "wrong pw";
  }

  return "fail";
};

const id_pw = ["meosseugi", "1234"];
const db = [
  ["rardss", "123"],
  ["yyoom", "1234"],
  ["meosseugi", "1234"],
];

console.log(solution(id_pw, db));
