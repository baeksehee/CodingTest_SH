//  전화번호 목록
//  1번째 도전
//  정확성: ⭕
//  효율성: ❌
//  문제 푼 시간: 15분
//  문제점:누가봐도 효율성 안 좋게 생김
//  for문과 if문 과하게 사용
//  hash는 Map을 꼭 써야할 것 같은 느낌이었는데 그냥 통과만 하면 되나?........

function solution(phone_book) {
  let answer = true;
  let map = new Map();

  for (let i = 0; i < phone_book.length; i++) {
    let phone_number = phone_book[i];
    map.set(i, phone_number);
  }

  for (let j = 0; j < map.size; j++) {
    let standard_phoneNumber = map.get(j);

    for (let k = 0; k < map.size; k++) {
      if (standard_phoneNumber !== map.get(k)) {
        if (standard_phoneNumber === map.get(k).slice(0, map.get(j).length)) {
          answer = false;
        }
      }
    }
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  아직 이해 못함!
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    //  나도 startsWith()와 같은 메서드를 찾고 싶었는데! 검색해서 찾는 거는 안 되겠지?
    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}

//
//  [velog _ DO YEON KIM]
//  [프로그래머스 JavaScript] 전화번호 목록

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    //    저는 [i], [i+1]을 생각하지 못했었나봐욤
    if (
      //  substring 말고 slice도 가능
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }

  return true;
}
