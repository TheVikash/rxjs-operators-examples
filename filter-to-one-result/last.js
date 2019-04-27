//last

const { of, interval } = require('rxjs');
const { last } = require('rxjs/operators');

// #region Example 1

of(1, 2, 3)
  .pipe(last())
  .subscribe(val => console.log(val));

// output
// 3

// #endregion

// #region Example 2
console.log('----------------------');

of(1, 2, 3)
  .pipe(last(v => v % 2 === 0))
  .subscribe(val => console.log(val));

// output
// 2
// #endregion

// #region Example 3

console.log('----------------------');
console.log('# call last on empty sequence causes error');
of()
  .pipe(last())
  .subscribe(v => console.log(v), err => console.log('error: ' + err.message));

// output
// #endregion

// #region Example 4

console.log('----------------------');
console.log('# call last on infinite sequence never emit');
interval()
  .pipe(last())
  .subscribe(v => console.log(v), err => console.log('error: ' + err.message));

// output
// #endregion
