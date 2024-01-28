//  영어 끝말잇기
//  정확성: ❌
//  시간: 1시간 이상

// 1 - n 1 - n 순서

//  앞사람이 말한 단어의 끝 문자로 시작하는 단어
//  이미 나왔던 단어는 사용할 수 없음
//  단어 한 글자는 안 됨

//  검사 해야 하는 거
//  단어의 길이가 1글자 이상이냐 words[i].length > 1
//  이미 나왔던 단어이냐 앞의 array에 includes()했을시 true이냐
//  앞사람이 말한 단어의 끝 문자로 시작하는 단어이냐 끝 words[i][words[i].length - 1] 시작 words[i][0]

//  만약에 그런 사람이 나왔어 그랬을 때!
//  그 사람의 순서는 index + 1 % n
//  그 사람의 차례 순서는 Math.floor(index + 1 / n)

//  내 코드1
function solution(n, words) {
  let answer = [0, 0];
  let newArr = [];

  words.map((e, i) => {
    if (e.length < 1) {
      index = i;
      answer[0] = n - (words.length % n);
      answer[1] = Math.ceil((i + 1) / n);
      return answer;
    } else if (newArr.includes(e)) {
      index = i;
      answer[0] = n - (words.length % n);
      answer[1] = Math.ceil((i + 1) / n);
      console.log(1);
      return answer;
    } else if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      index = i;
      answer[0] = n - (words.length % n);
      answer[1] = Math.ceil((i + 1) / n);
      console.log(2);
      return answer;
    }

    newArr.push(e);
  });

  return answer;
}

//  [프로그래머스] 영어 끝말잇기 (JavaScript)
//  velog-nemo

// 마지막 글자를 pop을 활용해서 끄낸 점 아주 훌륭함
// 중복인지 확인하는 코드를 indexOf()는 아마 제일 첫 번째에 해당하는 인덱스를 반환하기 때문에
// 그걸 기준으로 중복인지 아닌지 확인한 점 너무 멋짐
