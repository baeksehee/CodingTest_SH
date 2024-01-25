//  문자열 내 p와 y의 개수
//  정확성: ⭕
//  시간: 5분..?

function solution(s) {
  //  소문자를 대문자 대문자를 소문자로 바꾸는 메서드 기억 안 남
  //  문제에서 소문자 대문자 상관없다고 해서 그렇게 해야 좋은데
  let answer = true;
  let yCount = 0;
  let pCount = 0;

  s.split("").map((x) => {
    if (x === "p" || x === "P") {
      pCount++;
    } else if (x === "y" || x === "Y") {
      yCount++;
    }
  });

  answer = pCount = yCount ? true : false;

  return answer;
}

//  아는게 힘이다!
//  다른 사람의 코드를 보니 return 문에 한 줄로 끝남
//  split("p")이처럼 사용할 줄이야! 그것을 제외 한 길이를 보는 거임
