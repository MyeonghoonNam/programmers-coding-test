const getHourToMinute = (time) => {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
};

const solution = (fees, records) => {
  const [BASE_TIME, BASE_RATE, UNIT_TIME, UNIT_RATE] = fees;
  const park = new Map();
  const sumTime = new Map();
  const price = new Map();

  records.forEach((record) => {
    const [time, number, status] = record.split(" ");

    if (status === "IN") {
      park.set(number, time);
      price.set(number, BASE_RATE);
    }

    if (status === "OUT") {
      const inTime = getHourToMinute(park.get(number));
      const outTime = getHourToMinute(time);
      const useTime = outTime - inTime;

      sumTime.set(
        number,
        sumTime.get(number) ? sumTime.get(number) + useTime : useTime
      );

      park.delete(number);
    }
  });

  if (park.size !== 0) {
    for (let [number, time] of park) {
      const inTime = getHourToMinute(time);
      const outTime = getHourToMinute("23:59");
      const useTime = outTime - inTime;

      sumTime.set(
        number,
        sumTime.get(number) ? sumTime.get(number) + useTime : useTime
      );

      park.delete(number);
    }
  }

  for (let [number, time] of sumTime) {
    const useRate =
      time > BASE_TIME
        ? Math.ceil((time - BASE_TIME) / UNIT_TIME) * UNIT_RATE
        : 0;

    price.set(number, price.get(number) + useRate);
  }

  const result = [...price.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, b]) => b);

  return result;
};

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees, records));
