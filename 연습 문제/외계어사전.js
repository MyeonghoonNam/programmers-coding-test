const solution = (spell, dic) => {
  return dic.some((word) => spell.sort().join("") == [...word].sort().join(""))
    ? 1
    : 2;
};

const spell = ["s", "o", "m", "d"];
const dic = ["moos", "dzx", "smm", "sunmmo", "som"];

console.log(solution(spell, dic));
