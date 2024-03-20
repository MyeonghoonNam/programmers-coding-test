const rny_string = "masterpiece";

console.log(solution(rny_string));

function solution(rny_string) {
  const result = rny_string.replaceAll("m", "rn");
  return result;
}
