function solution() {
  const n = 118372;
  const answer = parseInt(
    n
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);

  console.log(answer);
}

solution();
