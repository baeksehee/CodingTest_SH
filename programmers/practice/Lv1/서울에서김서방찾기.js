//  서울에서 김서방 찾기
//  정확성: ⭕
//  시간: 8분

//  내 코드
//  나는 map으로 하려고 함
//  아마 forEach? 이런 것으로도 가능해 보임

function solution(seoul) {
  let answer = "";
  seoul.map((x, i) => {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  });
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  indexOf 로 찾아서 문자열 끼리 더해주면 그만이었음!! 헐!
//  그렇게 indexOf 많이 사용했는데 기억이 안 나다니
//  속도도 훨씬 빠름
