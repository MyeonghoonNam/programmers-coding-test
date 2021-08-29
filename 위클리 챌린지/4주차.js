const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
const languages = ["PYTHON", "C++", "SQL"];
const preference = [7, 5, 5]	;

console.log(solution(table, languages, preference));

function solution(table, languages, preference) {
  const map = new Map();
  let result = '';

  table.forEach(info => {
    info = info.split(' ');
    
    const job = info[0];
    const languages = info.splice(1);
    let score = 5;

    map.set(job, new Map());

    languages.forEach((language) => {
      map.get(job).set(language, score);
      score--;
    })
  });

  let max = Number.MIN_SAFE_INTEGER;

  for(let el of map) {
    const [job, scoreInfo] = el;

    if(!result) {
      result = job;
    }

    let sum = 0;

    languages.forEach((language, idx) => {
      sum += (scoreInfo.get(language) || 0) * preference[idx];

    });
  
    if(max < sum) {
      max = sum;
      result = job;
      
    } else if(max === sum) {
      if(result > job) {
        result = job;
      }  
    }
  }

  return result;
}
