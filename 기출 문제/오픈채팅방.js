const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(record));

function solution(record) {
  const userInfo = new Map();
  const log = [];
  const result = [];

  record.forEach((info) => {
    const [mod, userId, userName] = info.split(' ');

    switch (mod) {
      case 'Enter':
        userInfo.set(userId, userName);
        log.push({
          mod: `${mod}`,
          userId: `${userId}`,
        });
        break;
      case 'Leave':
        log.push({
          mod: `${mod}`,
          userId: `${userId}`,
        });
        break;
      case 'Change':
        userInfo.set(userId, userName);
        break;
    }
  });

  log.forEach((log) => {
    switch (log['mod']) {
      case 'Enter':
        result.push(`${userInfo.get(log['userId'])}님이 들어왔습니다.`);
        break;
      case 'Leave':
        result.push(`${userInfo.get(log['userId'])}님이 나갔습니다.`);

        break;
    }
  });

  return result;
}
