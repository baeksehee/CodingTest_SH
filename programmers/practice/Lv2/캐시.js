//  캐시
//  정확성: ❌
//  시간 : 30분

//  내 코드 1
//  왜 틀린지지 모름 -> 캐시 개념 부족
//  캐시 크기가 글씨 크기인 줄

function solution(cacheSize, cities) {
  let answer = 0;

  cities.map((e) => {
    if (cacheSize === e.length) answer += 1;
    else {
      cacheSize = e.length;
      answer += 5;
    }
  });

  return answer;
}

//  velog - [프로그래머스][JS]캐시
//  Kyle
//  캐시를 알았더라면 맞출 수도 ! 몰라서 전혀 못 맞춤
function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    let city = cities.shift().toUpperCase();

    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}

//  복습 코드
//  지난번 코드 참고 후 고침 ⭕
function solution(cacheSize, cities) {
  let answer = 0;

  let cache = [];

  if (cacheSize === 0) return cities.length * 5;
  if (cities.length === cacheSize) return cities.length;

  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toUpperCase();

    if (cache.includes(city)) {
      let index = cache.indexOf(city);
      cache.splice(index, 1);
      answer++;
    } else {
      if (cache.length === cacheSize) cache.shift();
      answer = answer + 5;
    }
    cache.push(city);
  }

  return answer;
}
