const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

// function solution(genres, plays) {
//   const list = genres.reduce((hash, g, i) => {
//     if (!hash[g]) {
//       hash[g] = { plays: plays[i], music: [] };
//     } else {
//       hash[g].plays += plays[i];
//     }
//     hash[g].music.push([i, plays[i]]);
//     return hash;
//   }, {});

//   const sortedList = Object.values(list).sort((a, b) => {
//     return b.plays - a.plays;
//   });

//   const result = [];
//   sortedList.forEach((g) => {
//     if (g.music.length > 1) {
//       g.music.sort((a, b) => {
//         return b[1] - a[1] || a[0] - b[0];
//       });

//       result.push(g.music[0][0]);
//       result.push(g.music[1][0]);
//     } else {
//       result.push(g.music[0][0]);
//     }
//   });

//   return result;
// }

// Map을 활용하여 풀이
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || {total:0, songs:[]};

      genreMap.set(genre, {
        total : data.total + play,
        songs: [...data.songs, { play, index}].sort((a, b) => b.play - a.play).slice(0, 2)
      });
  });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index);
}
