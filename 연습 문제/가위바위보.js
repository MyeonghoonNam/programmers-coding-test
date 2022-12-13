const solution = (rsp) => {
  const RSP = {
    2: "0",
    0: "5",
    5: "2",
  };

  const result = rsp
    .split("")
    .map((v) => RSP[v])
    .join("");

  return result;
};

const rsp = "2";
console.log(solution(rsp));
