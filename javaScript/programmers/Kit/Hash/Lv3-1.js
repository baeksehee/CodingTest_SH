//  베스트 엘범
//  1번째 도전
//  정확성: ❌
//  문제 푼 시간: 73분
//  6시 49분 - 57분
//  7시 02분 - 7시19분
//  7시 53분 -  8시 13분
//  20시 17분 - 20시 45분

// genres 장르
// plays 재생된 노래 횟수
// genres[i] i가 고유 번호

// 속한 노래가 많이 재생된 장르 먼저 수록 ex [클래식, 클래식, 팝, 팝]
// 장르마다 2개씩 수록, 재생 횟수가 많은 순으로
// 장르 내에서 재생 횟수가 같은 노래 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록 -> 장르 간의 재생횟수는 다르지만,
// 장르 내의 재생 횟수는 같을 수 있음

function solution(genres, plays) {
  let answer = [];
  let map = [];

  for (let i = 0; i < genres.length; i++) {
    map.push([genres[i], plays[i], i]); // i는 고유 번호
  }

  map.sort((a, b) => b[1] - a[1]); // 다차원 배열 sort 하는 법 까먹어서 다시 찾아봄

  console.log(map); //-> 만족스럽게 sort 됨

  let resultGenres = [];
  let numbersOfResultGenres = [];

  console.log(map.length);
  console.log(resultGenres.includes("hi"));

  for (let i = 0; i < map.length; i++) {
    let flag = resultGenres.includes(map[i][0]); // includes 함수 확인 검색 함
    if (flag) {
      let index = resultGenres.indexOf(map[i][0]); // indexof 확인 검색했다가 indexOf인거 확인 함
      numbersOfResultGenres[index] = numbersOfResultGenres[index].concat(
        map[i][2]
      );
    } else {
      resultGenres.push(map[i][0]);
      numbersOfResultGenres.push([map[i][0], map[i][2]]);
    }
  }

  console.log(resultGenres);
  console.log(numbersOfResultGenres);

  for (let i = 0; i < resultGenres.length; i++) {
    answer = [...answer, ...numbersOfResultGenres[i].slice(1, 3)];
  }

  return answer;
}
