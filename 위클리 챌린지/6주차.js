const solution = (weights, head2head) => {
  const result = [];

  for(let i = 0; i < weights.length; i++) {
    let winCount = 0;
    let loseCount = 0;
    let overWeightWinCount = 0;
    
    for(let j = 0; j < head2head[i].length; j++) {
      if(head2head[i][j] === 'N') {
        continue;
      } else if(head2head[i][j] === 'W') {
        if(weights[i] < weights[j]) {
          overWeightWinCount++;
        }
    
        winCount++;
      } else if(head2head[i][j] === 'L') {
        loseCount++;
      }
    }

    const rate = winCount / (winCount + loseCount);
    result.push([rate, overWeightWinCount, weights[i], i + 1]);
  }

  result.sort((a, b) => 
    b[0] - a[0] ||
    b[1] - a[1] ||
    b[2] - a[2] ||
    a[3] - b[3]
  )

  return result.map(player => player[3]);
}

const weights = [50, 82, 75, 120];
const head2head = ["NLWL","WNLL","LWNW","WWLN"];

console.log(solution(weights, head2head));