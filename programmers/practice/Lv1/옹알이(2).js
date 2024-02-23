//  옹알이(2)
//  정확성: ❌

function solution(babbling) {
  let answer = 0;
  let words = ["aya", "ye", "woo", "ma"];

  babbling.forEach((b) => {
    if (
      b.includes(words[0].repeat(2)) ||
      b.includes(words[1].repeat(2)) ||
      b.includes(words[2].repeat(2)) ||
      b.includes(words[3].repeat(2))
    )
      return;
    b = b.replace(words[1], " ");
    b = b.replace(words[0], " ");
    b = b.replace(words[2], " ");
    b = b.replace(words[3], " ");
    b = b.split("").filter((e) => e != " ");
    if (b.length === 0) answer++;
  });
  return answer;
}

//  [프로그래머스 | Javascript] 옹알이 (2)
//  박기영·2022년 12월 13일 - velog
//  참고

function solution(babbling) {
  let answer = 0;
  let words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let b = babbling[i];
    for (let j = 0; j < words.length; j++) {
      if (b.includes(words[j].repeat(2))) continue;
      b = b.split(words[j]).join(" ");
    }
    if (b.split(" ").join("").length === 0) answer++;
  }

  return answer;
}
