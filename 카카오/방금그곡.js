/**
 * map 객체 생성 {playTime, name, score}
 * 재생시간계산
 * 멜로디와 일치하는 음악 배열 지정
 * 음악 배열 길이가 2이상일 경우 재생시간 | 먼저 입력된 음악으로 정렬 후 1번째 음악 반환
 */

const getMinutesFromTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
};

const getMinutesPlayTime = (startTime, endTime) => {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  const playTime = endHours * 60 + endMinutes - startHours * 60 + startMinutes;

  return playTime;
};

const getScoreCollection = (score) => {
  const reg = /([a-z])#?/gi;
  const result = [...new Set(score.match(reg))];

  return result;
};

const getScoreLength = (score) => {
  const reg = /([a-z])#?/gi;
  const result = score.match(reg).length;

  return result;
};

const solution = (m, musicinfos) => {
  const map = [];

  musicinfos.forEach((info) => {
    const [startTime, endTime, name, score] = info.split(",");

    map.push({
      startTime: getMinutesFromTime(startTime),
      playTime: getMinutesPlayTime(startTime, endTime),
      name,
      score,
      scoreLength: getScoreLength(score),
      scoreCollection: getScoreCollection(score),
    });
  });

  const result = [];

  map.forEach((info) => {
    const { playTime, score, scoreLength, scoreCollection } = info;

    let music = "";

    if (playTime >= scoreLength) {
      const repeat = parseInt(playTime / scoreLength);
      const mod = playTime / scoreLength;

      music += score.repeat(repeat);
      music += scoreCollection.slice(0, mod).join("");
    }

    if (playTime < scoreLength) {
      music += scoreCollection.slice(0, playTime).join("");
    }

    let index = music.indexOf(m);

    if (index) {
      while (index) {
        if (music[index + m.length] !== "#") {
          result.push(info);
          break;
        }

        index = music.indexOf(m, index + 1);
      }
    }
  });

  if (result.length === 0) {
    return "(None)";
  }

  if (result.length > 1) {
    result.sort(
      (a, b) => (b.playTime - a.playTime) | (a.startTime - b.startTime)
    );
  }

  return result[0].name;
};

const m = "ABC";
const musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];

console.log(solution(m, musicinfos));
