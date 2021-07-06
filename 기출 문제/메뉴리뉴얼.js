const orders = ['XYZ', 'XWY', 'WXA'];
const course = [2, 3, 4];

console.log(solution(orders, course));

function solution(orders, course) {
  const map = new Map();

  orders = orders.map((order) => {
    return order.split('').sort().join('');
  });

  let menu = [];
  let choiced = [];

  const dfs = (idx, cnt, order) => {
    if (cnt >= 2) {
      let key = menu.join('');

      if (map.has(key)) {
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    }

    for (let i = idx; i < order.length; i++) {
      if (!choiced[i]) {
        choiced[i] = true;
        menu.push(order[i]);
        dfs(i, cnt + 1, order);
        menu.pop();
        choiced[i] = false;
      }
    }
  };

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    dfs(0, 0, order);

    menu = [];
    choiced = new Array(order.length).fill(false);
  }

  const result = [];

  for (let i = 0; i < course.length; i++) {
    const length = course[i];
    const maxCountMap = new Map();
    let maxCount = 0;

    map.forEach((count, menu) => {
      if (menu.length === length && count > 1) {
        maxCountMap.set(menu, count);
      }
    });

    maxCount = Math.max(...maxCountMap.values());

    maxCountMap.forEach((count, menu) => {
      if (count === maxCount) result.push(menu);
    });
  }

  return result.sort();
}
