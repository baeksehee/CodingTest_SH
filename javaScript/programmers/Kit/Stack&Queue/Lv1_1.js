//  같은 숫자는 싫어
//  정확성: ⭕
//  효율성: ⭕
//  문제 푼 시간: 16분

//  알고리즘을 풀려면 배열을 정말 잘 알아야 하는 구나!

//  내 코드
//  프로그래머스 - 다른 사람의 풀이 두 번째와 비슷
function solution(arr) {
  let answer = [];

  //    자동완성 기능이 없으니 불편 length 스펠링 틀려서 시간 먹었음
  for (let i = 0; i < arr.length; i++) {
    //  이 if문이 중요했음
    //  내가 배열에 넣고자한 인덱스를 i라고 했을 때
    //  그 앞에 index i-1에 같은 번호가 아닌지 확인
    if (answer[answer.length - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이

function solution(arr) {
  //  val = 배열의 각 요소
  //  index = 현재 요소의 인덱스
  //  이 콜백함수 ! 현재 arr에 다음 요소와 현재 요소를 비교해서 같지 않을 때만 배열에 추가
  //  이 코드가 내 코드보다 더 아이디어가 쉽다!
  return arr.filter((val, index) => val != arr[index + 1]);
}
