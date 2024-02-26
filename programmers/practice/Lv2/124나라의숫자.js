//  124 나라의 숫자
//  정확성: ❌
// 시간: 34분

//  내 코드1
//  내가 보기에도 이상함
//  규칙 찾는 문제라고 생각했지만
//  나는 규칙 찾기를 잘못해서
//  다른 방법으로 시도해봤는데
//  역시 규칙 찾기 문제였다.
function solution(n) {
  let answer = "";
  let leng = Math.ceil(n / 3) - 1;
  let last = n % 3;
  let dp = new Array(n + 1).fill(0);
  dp[1] = "1";
  dp[2] = "2";
  dp[3] = "4";
  let point = 0;

  for (let i = 4; i <= n; i++) {
    if (dp[i - 1].split("").filter((e) => 4).length === dp[i - 1].length) {
      dp[i] = "1".repeat(dp[i - 1].length + 1);
      point = dp[i].length - 1;
    }

    if (dp[i - 1][point] === "4" && point != 0) {
      point -= 1;
      dp[i] =
        dp[i - 1].slice(0, point - 1) +
        "1" +
        "4".repeat(dp[i - 1].length - point - 1);
    }

    if (dp[i - 1][point] === "4") {
      dp[i] = dp[i - 1].slice(0, point) + "4" + dp[i - 1].slice(point + 1);
    }

    if (dp[i - 1][point] === "1") {
      dp[i] = dp[i - 1].slice(0, point) + "2" + dp[i - 1].slice(point + 1);
    }
  }
  return dp[n];
}

// 참고
//  JungHyun Baek Developer from South Korea
//  Blog About Archive Tags Programmers-123 나라의 숫자
//  Problem Solved/Programmers
//  [Programmers][Javascript] 124 나라의 숫자 2020. 6. 3. 21:23
function solution(n) {
  let answer = "";
  while (n > 0) {
    let rest = n % 3;
    if (rest === 0) {
      rest = 4;
    }
    answer = rest + answer;
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}
