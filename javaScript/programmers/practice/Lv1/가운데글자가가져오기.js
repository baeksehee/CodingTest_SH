//  가운데 글자 가져오기
//  정확성: ⭕
//  시간: 7분

function solution(s) {
  let answer = "";
  answer =
    s.length % 2 === 0
      ? (answer += s[s.length / 2 - 1] + s[s.length / 2])
      : (answer += s[parseInt(s.length / 2)]);
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  substr()이랑 Math.ceil() 활용
