// mergeScan
// emit the cumulative result of combining past values

const { of } = require('rxjs');
const { mergeScan } = require('rxjs/operators');

console.log('# emit cumulative sum');

of(1, 2, 3, 4)
  .pipe(mergeScan((acc, val) => of(acc + val), 0))
  .subscribe(val => console.log(val));

// Output
// # emit cumulative sum
// 1
// 3
// 6
// 10
