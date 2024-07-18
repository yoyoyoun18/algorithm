function solution() {
  const n = 4; // 상수로 고정된 n 값
  let answer = Array.from({ length: n }, () => Array(n).fill(0)); // n x n 크기의 2차원 배열 초기화
  let x = 0,
    y = 0;
  let i = 1;
  let dy = [0, 1, 0, -1]; // 방향: 오른쪽, 아래, 왼쪽, 위
  let dx = [1, 0, -1, 0]; // 방향: 오른쪽, 아래, 왼쪽, 위
  let direction = 0;

  while (i <= n * n) {
    answer[y][x] = i;
    i++;

    let newX = x + dx[direction];
    let newY = y + dy[direction];

    if (
      newX < 0 ||
      newX >= n ||
      newY < 0 ||
      newY >= n ||
      answer[newY][newX] !== 0
    ) {
      direction = (direction + 1) % 4; // 방향 전환
      newX = x + dx[direction];
      newY = y + dy[direction];
    }

    x = newX;
    y = newY;
  }

  console.log(answer);
}

solution();
