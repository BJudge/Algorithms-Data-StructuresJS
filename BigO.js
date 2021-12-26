//
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
//
function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}
t1 = performance.now();
console.log(addUpTo(1000000000));
t2 = performance.now();
console.log(`${(t2 - t1) / 1000}`);
t3 = performance.now();
console.log(addUpToNew(1000000000));
t4 = performance.now();
console.log(`${(t4 - t3) / 1000}`);
