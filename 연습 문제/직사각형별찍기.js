process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.split(' ');

  const n = Number(input[0]);
  const m = Number(input[1]);

  let row = '*'.repeat(n);

  for (let i = 0; i < m; i++) {
    console.log(row);
  }
});
