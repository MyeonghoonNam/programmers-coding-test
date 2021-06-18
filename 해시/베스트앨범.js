const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(Solution(genres, plays));

function Solution(genres, plays) {
  const list = genres.reduce((hash, g, i) => {
    if (!hash[g]) {
      hash[g] = { plays: plays[i], music: [] };
    } else {
      hash[g].plays += plays[i];
    }
    hash[g].music.push([i, plays[i]]);
    return hash;
  }, {});

  const sortedList = Object.values(list).sort((a, b) => {
    return b.plays - a.plays;
  });

  const result = [];
  sortedList.forEach((g) => {
    if (g.music.length > 1) {
      g.music.sort((a, b) => {
        return b[1] - a[1] || a[0] - b[0];
      });

      result.push(g.music[0][0]);
      result.push(g.music[1][0]);
    } else {
      result.push(g.music[0][0]);
    }
  });

  return result;
}
