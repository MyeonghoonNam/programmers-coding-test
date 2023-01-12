/**
 * map 객체 생성 {playTime, name, score}
 * 재생시간계산
 * 멜로디와 일치하는 음악 배열 지정
 * 음악 배열 길이가 2이상일 경우 재생시간 | 먼저 입력된 음악으로 정렬 후 1번째 음악 반환
 */

const getMinutesPlayTime = (startTime, endTime) => {
  const [startHours, startMinutes] = startTime.split(":");
  const [endHours, endMinutes] = endTime.split(":");

  const playTime = 60 * (endHours - startHours) + (endMinutes - startMinutes);

  return playTime;
};

const solution = (m, musicinfos) => {
  const map = musicinfos.map((info) => {
    const [startTime, endTime, name, code] = info.split(",");
    const playTime = getMinutesPlayTime(startTime, endTime);

    const reg = /[A-Z]#?/g;
    const codeCollection = code.match(reg);

    let stream = "";

    stream += code.repeat(parseInt(playTime / codeCollection.length));
    stream += codeCollection
      .slice(0, playTime % codeCollection.length)
      .join("");

    const music = { name, playTime, stream };

    return music;
  });

  const result = map.filter(({ stream }) => {
    let index = stream.indexOf(m);

    if (index === -1) {
      return false;
    }

    while (index !== -1) {
      if (stream[index + m.length] !== "#") {
        return true;
      }

      index = stream.indexOf(m, index + 1);
    }
  });

  if (!result.length) {
    return "(None)";
  }

  if (result.length > 1) {
    result.sort((a, b) => {
      if (a.playTime === b.playTime) {
        return 0;
      }

      return b.playTime - a.playTime;
    });
  }

  return result[0].name;
};

const m = "CC#BCC#BCC#BCC#B";
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:31,BAR,CC#BCC#BCC#B"];

console.log(solution(m, musicinfos));
