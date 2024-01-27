//  JadenCase 문자열 만들기
//  정확성: ❌
//  시간: 30분

//  내 코드
//  문자열을 " "으로 나눈다 split(" ")
//  문자열 인덱스 하나하나에 첫 번째 인덱스를 upperCase 바꿔준다 그리고 다시 저장한다
//  upperCase 자세한 메서드 이름을 까먹어서 검색 찬스! -> toUpperCase()
//  e.toUpperCase()와 e.toLowerCase() 부분에 e[index]라 해서 오류남 오류 못 찾아서 gpt의 도움을

function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("");

    word.map((e, index) => {
      if (index === 0) {
        word[index] = e.toUpperCase();
      }
      if (index !== 0 && word[index] === word[index].toUpperCase()) {
        word[index] = e.toLowerCase();
      }
      arr[i] = word.join("");
    });

    answer = arr.join(" ");
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  나는 0번째 index 자리에 있는 알파벳은 대문자
//  그 외의 index에서 대문자로 나온 알파벳을 하나하나 찾아 소문자로 바꿔주는 코드를 짰었다.
//  이 프로그래머스 다름 사람의 풀이에서
//  문제를 읽고 0번째 index를 제외한 모든 문자는 소문자이면 되기 때문에 하나로 취급하고 모두 소문자로 바꾸는 코드를 짰다.
//  문제를 읽고 풀이를 어떻게 해야 할지 조금 더 고민해봐야겠다!
//  너무 완벽한 코드!
