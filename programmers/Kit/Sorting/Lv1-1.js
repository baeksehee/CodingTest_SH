//  K번째수
//  정확성: ❌ 80몇 점 sort() 정렬을 이렇게 사용해서 틀림
//  문제 푼 시간: 18분

function solution(array, commands) {
  let answer = [];
  for (let a = 0; a < commands.length; a++) {
    const i = commands[a][0];
    const j = commands[a][1];
    const k = commands[a][2];
    //  slice 헷갈려서
    //  console.log([1,5,2,6,3,7,4].slice(2 - 1 ,5));
    //  slice 첫 번째 매개변수 = 자르기 시작할 인덱스 번호
    //  slice 두 번째 매개변수 = 잘리는 인덱스의 다음 인덱스 번호

    //  (a, b) => a - b 를 생각하지 않아서 틀림
    //  아마 2, 11 이런 수가 있었으면 테스트에 통과하지 못했을 거다.
    const targetArray = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(targetArray[k - 1]);
  }
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  전체적이 분석보다
const [i, j, k] = commands[a];
//  구조분해할당 했으면 더 좋았을 듯하다.
