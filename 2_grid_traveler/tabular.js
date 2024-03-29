
const gridTravel = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
        /**
         * Do a boundary check
         */
        const current = table[i][j];
        if(i + 1 <= m) table[i + 1][j] += current
        if(j + 1 <= n) table[i][j + 1] += current
    }
  }
  return table[m][n];
};


console.time();
console.log(gridTravel(1, 1));
console.log(gridTravel(2, 2));
console.log(gridTravel(3, 3));
console.log(gridTravel(4, 4));
console.log(gridTravel(17,17));
console.timeEnd();
