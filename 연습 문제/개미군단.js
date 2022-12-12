const solution = (hp) => {
  const HIGH = 5;
  const MIDDLE = 3;
  const LOW = 1;

  let result = 0;

  if (hp >= HIGH) {
    result += parseInt(hp / HIGH);
    hp = parseInt(hp % HIGH);
  }

  if (hp >= MIDDLE) {
    result += parseInt(hp / MIDDLE);
    hp = parseInt(hp % MIDDLE);
  }

  if (hp >= LOW) {
    result += parseInt(hp / LOW);
    hp = parseInt(hp % LOW);
  }

  return result;
};

const hp = 23;
console.log(solution(hp));
