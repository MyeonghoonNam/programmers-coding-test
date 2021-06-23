const tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

console.log(solution(tickets));

function solution(tickets) {
  const ticketUsed = new Array(tickets.length).fill(false);
  let result = [];

  tickets.sort();

  const dfs = (airport, cnt, path) => {
    if (cnt === tickets.length && !result.length) {
      result = path;
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!ticketUsed[i] && tickets[i][0] === airport) {
        ticketUsed[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        ticketUsed[i] = false;
      }
    }
  };

  dfs('ICN', 0, ['ICN']);

  return result;
}
