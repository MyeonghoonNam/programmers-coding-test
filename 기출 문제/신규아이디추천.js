const new_id = '=.=';

console.log(solution(new_id));

function solution(new_id) {
  // step 1
  new_id = new_id.toLowerCase();

  // step 2
  new_id = new_id.replace(/[^a-z\d-_.]/g, '');

  // step 3
  new_id = new_id.replace(/\.{2,}/g, '.');

  // step 4
  if (new_id[0] === '.') {
    new_id = new_id.slice(1);
  }

  if (new_id[new_id.length - 1] === '.') {
    new_id = new_id.slice(0, new_id.length - 1);
  }

  // step 5, 6, 7
  if (new_id.length === 0) {
    new_id = 'a';
  }

  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id = new_id + new_id[new_id.length - 1];
    }
  } else {
    new_id = new_id.slice(0, 15);

    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }

  return new_id;
}
