const files = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];

console.log(solution(files));

function solution(files) {
  files.sort((a, b) => {
    const first = tokenize(a);
    const second = tokenize(b);

    return fileSort(first, second);
  });

  return files;
}

function tokenize(file) {
  let startNumberIdx;
  let endNumberIdx;

  for (let i = 0; i < file.length; i++) {
    if (!startNumberIdx && isNumber(file[i])) {
      startNumberIdx = i;
    }

    if (startNumberIdx && !isNumber(file[i + 1])) {
      endNumberIdx = i;
      break;
    }
  }

  const head = file.slice(0, startNumberIdx);
  const number = file.slice(startNumberIdx, endNumberIdx + 1);

  return [head.toLowerCase(), number * 1];
}

function fileSort(a, b) {
  let [aHead, aNum] = a;
  let [bHead, bNum] = b;

  if (aHead < bHead) return -1;
  else if (aHead > bHead) return 1;
  else return aNum - bNum;
}

function isNumber(char) {
  return Number.isInteger(parseInt(char));
}
