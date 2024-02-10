//  스킬트리
//  정확성: ⭕
//  시간: 40분

//  내 코드 1
//  typeof 검색해봄 ..
function solution(skill, skill_trees) {
  let sk = skill.split("");
  let minus = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let check = new Array(skill.length).fill("hi");
    let skill_tree = skill_trees[i].split("");
    for (let j = 0; j < sk.length; j++) {
      skill_tree.map((e, i) => {
        if (sk.includes(e)) {
          let index = sk.indexOf(e);
          check[index] = i;
        }
      });

      // if(skill_trees.includes(sk[j])) {
      //     let skillIndex = skill_trees.indexOf(sk[j]);
      //     let checkIndex =  sk.indexOf(sk[j]);
      //     check[checkIndex] = skillIndex;
      // }
    }
    for (let i = 0; i < check.length; i++) {
      if (
        (typeof check[i] === typeof "hi" && typeof check[i + 1] === typeof 2) ||
        check[i] > check[i + 1]
      ) {
        minus++;
        break;
      }
    }
  }
  return skill_trees.length - minus;
}

//  30분 넘어서 성공한 문제 공부 안 했음! 아 맞다!
//  지금 생각해보니깐! 이제부터 열심히 하겠습니다!

//  참고
//  [프로그래머스-JS] level.2 스킬 트리
//  2023. 6. 28. 10:580
//  알고리즘/프로그래머스 - JS
//  tistory

function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  for (let i = 0; i < skill_trees.length; i++) {
    let skillStack = [...skill];
    let skillTree = skill_trees[i];
    for (let j = 0; j < skillTree.length; j++) {
      if (!skill.includes(skillTree[j])) continue;
      if (skillStack.shift() !== skillTree[j]) {
        // pop()이랑 헷갈림요
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}
