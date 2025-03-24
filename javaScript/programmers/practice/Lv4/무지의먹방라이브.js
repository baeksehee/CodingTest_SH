// 무지의 먹방 라이브
// 시간: 약 3시간

// 내 코드 1
// 결과: 정확성 5.4 효율성 0.0

// N 개의 음식 (1~N까지의 번호) 섭취 시간 소요
// food_times 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열
// k는 방송이 중단된 시간
// 음식이 남지 않았다면 -1
// k 값이 꽤 크네 2,000,00
// Counting 정렬을 알려주셨으니깐 그것으로 해볼까나
// k가 그렇게 중요하다고 생각이 안 드는데,,
// 중요한건 k초 후에 몇 번이냐!! 이건데
// 정렬임을 생각해보자고 !!

// 코드 작성 전 전략
// [1,2,3]
// [3,1,2]

// 1 > [2,1,2]
// 1-2 > [2,0,2]
// 2-3 > [2,0,1]
// 3-4 > [1,0,1]
// 4-5 > [1,0,0]

// [2,3,3,1,1,1] k=5

// [3, 1, 2]
// [1, 2, 3]

// k가 배열의 몇 배인지도 중요해보여 흠 그치 않나 ?
// 아니면 최솟값이 중요할 수 도 있겠어
// 효율적인 측면에서 말이야
// 최솟값인 걸 자꾸 빼보는거야 그러면 어떨까나
// 순서가 중요해서 뭘 바꾸기에는 좀 그렇네

function solution(food_times, k) {
  let answer = 0;

  // 우선 k 이후에 먹을게 없을 때 예외 처리

  let allTimeSum = food_times.reduce((a, c) => a + c, 0);

  if (k > allTimeSum) return -1;

  let remainingTime = k; // 변수 이름 파파고

  // 2차원 정렬 배열이라면 가능할지도 그러면 순서와 시간 값을 공동으로 저장할 수 있으니깐
  let indexTimeSet = food_times.map((a, i) => [a, i + 1]);

  let acsIndexTimeSet = indexTimeSet.sort((a, b) => a[0] - b[0]);

  let ArrayLen = food_times.length;

  for (let i = 0; i < k; i++) {
    if (remainingTime === ArrayLen) {
      acsIndexTimeSet.sort((a, b) => a[1] - b[1]);
      answer = acsIndexTimeSet[0][1];
      break;
    } else if (remainingTime < ArrayLen) {
      acsIndexTimeSet.sort((a, b) => b[1] - a[1]);
      answer = acsIndexTimeSet[remainingTime - 1][1];
    } else {
      let point = Math.floor(remainingTime / ArrayLen);
      let outFood = acsIndexTimeSet.filter((e) => e[0] <= point);
      acsIndexTimeSet = acsIndexTimeSet.filter((e) => e[0] > point);
      acsIndexTimeSet = acsIndexTimeSet.map((a) => [a[0] - point, a[1]]);
      remainingTime =
        remainingTime - point * acsIndexTimeSet.length - outFood.length;
      ArrayLen = acsIndexTimeSet.length;
    }
  }

  return answer;
}
