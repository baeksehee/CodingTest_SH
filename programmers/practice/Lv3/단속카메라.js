//  단속 카메라
//  정확성: ❌
//  시간: 30분

//   내 코드 1
//  왜 틀렸는지 모르겠넴
function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => b[0] - a[0]);

  let target = routes.pop();

  while (routes.length > 0) {
    let num = routes[routes.length - 1];
    if (num[0] <= target[1]) routes.pop();
    else {
      target = routes.pop();
      answer++;
    }
  }

  return answer;
}

//  gpt 참조
//  기존 블로그 글보다 코드가 나에게는 이해하기 쉬웠음
function solution(routes) {
  let answer = 1;

  routes.sort((a, b) => a[1] - b[1]);
  let camera = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      camera = routes[i][1];
      answer++;
    }
  }

  return answer;
}
