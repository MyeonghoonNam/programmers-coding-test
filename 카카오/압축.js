const solution = (msg) => {
  const words = [];

  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    words.push(String.fromCharCode(i));
  }

  let before = "";
  const result = [];

  for (let i = 0; i < msg.length; i++) {
    before += msg[i];

    if (!words.includes(before)) {
      result.push(words.indexOf(before.slice(0, -1)) + 1);
      words.push(before);

      before = msg[i];
    }
  }

  if (before) result.push(words.indexOf(before) + 1);

  return result;
};

const msg = "KAKAO";
console.log(solution(msg));
