//  푸트 파이트 대회
//  정확성 :❌ (80점)

//  1대 1로 대결
//  매 대결마다 음식의 종류와 양이 바뀜
//  음식(왼쪽 -> 오른쪽) 물 (왼쪽 <- 오른쪽)음식
//  중앙에 물을 먼저 마시는 사람이 승리
//  음식의 종류와 양이 같음, 음식을 먹는 순서도 같음
//  칼로리가 낮은 음식부터 순서임
//  대회의 음식 같은 종류는 짝수여야 함 홀수이면 하나 없앰
//  물은 = 0
//  1-> 점점 칼로리가 높아지는 음식임

//  입력값 food는 index 0에 물의 갯수 index 1에 칼로리 제일 낮은 음식 이렇게 순서대로

//  내 코드

function solution(food) {
  var answer = "0";
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 != 0) {
      food[i]--;
    }
  }
  console.log(food);
  for (let i = food.length - 1; i > 0; i--) {
    let pushCount = parseInt(food[i] / 2);
    answer = answer.padStart(answer.length + pushCount, food.indexOf(food[i]));
    answer = answer.padEnd(answer.length + pushCount, food.indexOf(food[i]));
  }

  return answer;
}

//  코드 수정하기
//  answer에 0으로 최기화해서 그런가?
//  아님.
//  결과적으로 0을 초기화 하지 않은 것이 좋긴함
//  0을 기준으로 앞과 뒤를 어떻게 넣지? 그런 생각이 줄어들었기 때문
function solution(food) {
  //var answer = "0";
  var answer = ""; // 중간 값에 0을 넣었던 건 실수
  // 대칭 문제를 풀기에 난감했음
  //  테스트 코드는 통과되나 채점에서 실패하기 쉬웠던 것 같음

  //    먼저 홀수인 수를 정리해주는 코드는 나쁘지 않아 보임
  //    다만, 더 짧게 가능해보임
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 != 0) {
      food[i]--;
    }
  }

  //    padStart랑 padEnd 대칭 문제를 풀기에 나빠 보이지 않았는데
  //    틀린 원인을 찾지 못하겠음
  //   for (let i = food.length - 1; i > 0; i--) {
  //     let pushCount = parseInt(food[i] / 2);
  //     answer = answer.padStart(answer.length + pushCount, food.indexOf(food[i]));
  //     answer = answer.padEnd(answer.length + pushCount, food.indexOf(food[i]));
  //   }
  for (let i = food.length - 1; i > 0; i--) {
    let pushCount = parseInt(food[i] / 2);
    answer = answer.padStart(answer.length + pushCount, food.indexOf(food[i]));
  }

  answer += "0";

  for (let i = food.length - 1; i > 0; i--) {
    let pushCount = parseInt(food[i] / 2);
    answer = answer.padEnd(answer.length + pushCount, food.indexOf(food[i]));
  }

  return answer;
}

//  코드 수정하기
//  1 : 1 대결 음식은 0을 기준으로 반전만 하면 됨
//  같은 값을 기준으로 reverse()만 해서 answer에 더해주겠음
function solution(food) {
  let answer = "";
  let one = []; // 추가

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 != 0) {
      food[i]--;
    }
  }

  for (let i = food.length - 1; i > 0; i--) {
    let pushCount = food[i] / 2;
    while (pushCount >= 1) {
      one.push(i);
      pushCount--;
    }
  }
  answer += one.reverse().join("");
  answer += "0";
  answer += one.reverse().join("");
  return answer;
}
