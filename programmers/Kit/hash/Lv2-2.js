//  의상종류에 따라 분리가 필요 -> 이거야 말로 map 함수가 좋을 것 같다!
//  의상종류에 따라 분리가 필요 -> 이거야 말로 map 함수가 좋을 것 같다!
function solution(clothes) {
  let answer = 0;
  let clothesTypes = new Map();

  for (let i = 0; i < clothes.length; i++) {
    clothesTypes.set(
      clothes[i][1],
      clothesTypes.get(clothesTypes.get(clothes[i][1]) + ` ${clothes[i][0]}`)
    );

    console.log(clothesTypes);
  }
  return answer;
}

//  두 번째 시도
//  정확성: ⭕
//  시간: 50분 (수학 공식 도출 때문에 헤맴)
//  아쉬운점: map이나 object를 사용하지 않음 (해시 문제)

function solution(clothes) {
  let answer = 1;
  let clothesType = [];
  let count = [];

  for (let i = 0; i < clothes.length; i++) {
    if (clothesType.includes(clothes[i][1])) {
      let index = clothesType.indexOf(clothes[i][1]);
      count[index]++;
    } else {
      clothesType.push(clothes[i][1]);
      count.push(1);
    }
  }

  if (clothesType.length === 1) return count[0];
  else {
    count.map((e) => (answer = answer * (e + 1)));
    answer -= 1;
  }

  return answer;
}

//  [프로그래머스 JavaScript] 의상
//  DO YEON KIM
//  참고해서 객체로 변경

function solution(clothes) {
  let answer = 1;
  let obj = {};

  clothes.forEach((clotheType) => {
    let [clothe, type] = clotheType;
    if (obj.hasOwnProperty(type)) {
      obj[type] += 1;
    } else {
      obj[type] = 1;
    }
  });

  for (const key in obj) {
    answer = answer * (obj[key] + 1);
  }
  answer--;

  return answer;
}
