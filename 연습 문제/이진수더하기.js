const solution = (bin1, bin2) => {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
};

const bin1 = "10";
const bin2 = "11";

console.log(solution(bin1, bin2));
