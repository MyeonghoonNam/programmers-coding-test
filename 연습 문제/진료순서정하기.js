const solution = (emergency) => {
  const map = new Map();
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  sortedEmergency.forEach((emergency, index) => {
    map.set(emergency, index + 1);
  });

  const result = emergency.map((value) => map.get(value));

  return result;
};

const emergency = [3, 76, 24];

console.log(solution(emergency));
