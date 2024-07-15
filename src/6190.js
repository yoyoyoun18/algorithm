function solution(lottos, win_nums) {
  let correct = 0;
  let zeroCount = 0;
  const answer = [];

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] !== 0) {
      if (win_nums.includes(lottos[i])) {
        correct++;
      }
    } else {
      zeroCount++;
    }
  }

  const convertLotto = (num) => {
    if (num === 6) {
      return 1;
    } else if (num === 5) {
      return 2;
    } else if (num === 4) {
      return 3;
    } else if (num === 3) {
      return 4;
    } else if (num === 2) {
      return 5;
    } else {
      return 6; 
    }
  };

  answer.push(convertLotto(correct + zeroCount));
  answer.push(convertLotto(correct));
  return answer;
}
