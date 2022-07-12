const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

const solution = (id_list, report, k) => {
  const map = new Map();
  const stop_list = []; // 정지명단
  const result = new Array(id_list.length).fill(0);

  id_list.forEach((id) => {
    map.set(id, {
      report_list: [], // 내가 신고한 사람의 명단
      count: 0, // 내가 신고받은 수
    });
  });

  report.forEach((str) => {
    const [from, to] = str.split(" ");

    const { report_list } = map.get(from);
    let { count } = map.get(to);

    if (!report_list.includes(to)) {
      report_list.push(to);
      count++;
    }

    map.set(from, { ...map.get(from), report_list });
    map.set(to, { ...map.get(to), count });
  });

  map.forEach((info, person) => {
    if (info.count >= k) {
      stop_list.push(person);
    }
  });

  id_list.forEach((id, index) => {
    const { report_list } = map.get(id);

    report_list.forEach((id) => {
      if (stop_list.includes(id)) {
        result[index]++;
      }
    });
  });

  return result;
};

console.log(solution(id_list, report, k));
