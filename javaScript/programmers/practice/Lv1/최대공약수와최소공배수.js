// 최대공약수와 최소공배수

// 내 코드 1
// 결과: 틀렸습니다!
// 이유는 유클리드 호제법 코드를 기억하지 못해서
// 최대공약수를 구하는 코드를 잘못 작성했기 때문입니다.

function solution(n, m) {
  let answer = [];

  let saveN = n;
  let saveM = m;

  while (saveM > 0) {
    // 최대 공약수 공식을 까먹었습니다.
    let temp = saveN;
    saveN = saveN % saveM;
    saveM = temp;
    if (saveM == 0) console.log(saveN, saveM);
  }

  console.log(saveM);

  answer.push((n * m) / answer[0]);

  return answer;
}

// 내 코드 2
// 정확성: 100

function solution(n, m) {
  let answer = [];

  let saveN = n;
  let saveM = m;

  while (saveM > 0) {
    // 코딩테스트 지도 강의의 최대공약수의 유클리드 호제법 수학 공식 참고
    let temp = saveN % saveM;
    saveN = saveM;
    saveM = temp;
  }

  answer.push(saveN);

  answer.push((n * m) / answer[0]);

  return answer;
}
