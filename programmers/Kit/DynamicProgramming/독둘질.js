//  도둑질
//  정화성: ❌
//  시간: 20 분

//  내 코드 1
function solution(money) {
  let answer = 0;

  let dp = new Array(money.length).fill(0);

  let dMoney = money.concat(money);

  for (let i = 0; i < money.length; i++) {
    let array = dMoney.slice(i, i + money.length - 1);

    dp[0] = array[0];
    dp[1] = array[1];

    for (let j = 2; j < array.length; j++) {
      dp[i] +=
        array[i - 2] + array[i] > array[i - 1]
          ? array[i - 2] + array[i]
          : array[i - 1];
    }
  }
  // console.log(dp);
  return Math.max(...dp);
}

//  고친 코드
//  참고
//  [프로그래머스] 🐱‍👤도둑질
//  Chobby·2023년 8월 10일 -velog

function solution(money) {
  let leng = money.length;
  let dp1 = new Array(leng).fill(0);
  let dp2 = new Array(leng).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < leng - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
  }

  dp2[0] = 0;
  dp2[1] = money[1];

  for (let j = 2; j < leng; j++) {
    dp2[j] = Math.max(dp2[j - 2] + money[j], dp2[j - 1]);
  }

  //    주석처리한 부분으로 Math.max의 값을 찾으려니
  //    테스트 케이스 집이 1000000개 있을 때 너무 수가 커서 런타임 에러 발생 추측
  //     let one = Math.max(...dp1);
  //     let two = Math.max(...dp2);

  return Math.max(dp1[leng - 2], dp2[leng - 1]);
  // return Math.max(one, two);
}
