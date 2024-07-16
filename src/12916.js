function solution() {
  const s = "pPoooyY";
  let pCount = 0;
  let yCount =0;
  const acc = s
    .toLowerCase()
    .split("")
    .forEach((a)=>{
      if(a === 'p') {
        pCount++
      }else if (a === 'y') {
        yCount++;
      }
    })
  const answer = pCount === yCount

  console.log(answer);
}

solution();
