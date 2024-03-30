//  모의고사
//  정확성: ⭕

function solution(answers) {
  let answer = [];
  const onePattern = [1, 2, 3, 4, 5];
  const twoPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const threePattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let oneScore = 0;
  let twoScore = 0;
  let threeScore = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == onePattern[i % 5]) {
      oneScore++;
    }
    if (answers[i] == twoPattern[i % 8]) {
      twoScore++;
    }
    if (answers[i] == threePattern[i % 10]) {
      threeScore++;
    }
  }

  const topScore = Math.max(...[`${oneScore}`, `${twoScore}`, `${threeScore}`]);

  if (oneScore === topScore) {
    answer.push(1);
  }
  if (twoScore === topScore) {
    answer.push(2);
  }
  if (threeScore === topScore) {
    answer.push(3);
  }

  return answer.sort((a, b) => a - b);
}
