/**
 * 도시 이름 검색 시 도시와 관련된 맛집 게시물 나옴
 *
 */

class LRU {
  constructor(size) {
    this.cache = [];
    this.capacity = size; // 캐시 용량 제한
    this.missTime = 5; // 캐시 있는 경우의 실행시간
    this.hitTime = 1; // 캐시 없는 경우의 실행시간
  }

  put(value) {
    if (this.capacity === this.cache.length) {
      // 캐시 용량 포화
      this.cache.shift();
    }

    this.cache.push(value);
  }

  get(value) {
    const index = this.cache.findIndex((e) => e === value);

    // 캐시에 값 있는 경우
    if (index !== -1) {
      this.put(...this.cache.splice(index, 1));
      return this.hitTime;
    }

    // 캐시에 값 없는 경우
    this.put(value);
    return this.missTime;
  }
}

const solution = (cacheSize, cities) => {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  const cache = new LRU(cacheSize);
  let result = 0;

  cities.forEach((city) => {
    result += cache.get(city.toUpperCase());
  });

  return result;
};

const cacheSize = 2;
const cities = ["Jeju", "Pangyo", "NewYork", "newyork"];

console.log(solution(cacheSize, cities));
