const scores = [[70,49,90],[68,50,38],[73,31,100]];

console.log(solution(scores));

function solution(scores) {
  const result = [];

  for(let j = 0; j < scores.length; j++) {
    const selfScore = scores[j][j];
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let isUnique = true; // 유일값 체크
    let sumScore = 0;
    let count = scores.length;

    for(let i = 0; i < scores.length; i++) {
      const score = scores[i][j];
      
      max = max < score ? score : max;
      min = min > score ? score : min;
      
      if(i !== j && selfScore === score) {
        isUnique = false;
      }
      
      sumScore += score;
    }

    if(isUnique && (selfScore === max || selfScore === min)) {
      count--;
      sumScore -= selfScore;
    }

    result.push(calculateGrade(sumScore / count));
  }

  return result.join('');
}

function calculateGrade(average) {
  let grade = '';

  switch(Math.floor(average / 10)) {
    case 10 :
    case 9 :
      grade = 'A';
      break;
    case 8 :
      grade = 'B';
      break;
    case 7 :
      grade = 'C';
      break;
    case 6 :
    case 5 :
      grade = 'D';
      break;
    default:
      grade = 'F';
      break;
  }

  return grade;
}