/**
 * 치킨 한 마리(유료) => 쿠폰 한 장
 * 쿠폰 열 장 => 치킨 한 마리(무료, 쿠폰 발급)
 *
 * 요구사항 : 최대 서비스 치킨의 수 도출
 */

const solution = (chicken) => {
  let coupon = chicken;
  let result = 0;

  while (coupon >= 10) {
    const leftCoupon = coupon % 10;
    const serviceChicken = parseInt(coupon / 10);

    result += serviceChicken;
    coupon = leftCoupon + serviceChicken;
  }

  return result;
};

const chicken = 100;
console.log(solution(chicken));
