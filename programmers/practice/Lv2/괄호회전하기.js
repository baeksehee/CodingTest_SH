//  괄호 회전하기
//  정확성:
//  시간: 40분 이상

//  내 코드1
function solution(s) {
  let answer = 0;

  let arr = s.split("");

  let rotate = s.length;

  while (rotate > 1) {
    let a = 0; // ()
    let b = 0; // []
    let c = 0; // {}

    arr.map((e, i) => {
      if (e == "(") a += 1;
      if (e == "[") b += 1;
      if (e == "{") c += 1;
      if (e == ")" && a !== 1) a -= 2;
      if (e == "]" && b !== 1) b -= 2;
      if (e == "}" && c !== 1) c -= 2;
    });

    arr.push(arr[0]);
    arr = arr.slice(1, 8);

    a == 1 && b == 1 && c == 1 ? (answer += 1) : (answer += 0);

    rotate--;
  }

  return answer;
}
