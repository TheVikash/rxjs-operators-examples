// first

const { of } = require('rxjs');
const { first } = require('rxjs/operators');

// #region Example 1
console.log('# just the first');
of(0, 1, 2, 3, 4)
  .pipe(first())
  .subscribe(val => console.log(val), null, () => console.log('complete'));

// #endregion

//output
// 0
// complete

console.log('---------------------');

// #region Example 2
of(1, 3, 5, 7, 9, 10)
  .pipe(first(v => v % 2 === 0))
  .subscribe(val => console.log(val), null, () => console.log('complete'));

// output
// first : 10
// #endregion

console.log('---------------------');

// #region Example 3

of(1, 3, 5, 7, 9)
  .pipe(first(v => v % 2 === 0))
  .subscribe(
    val => console.log(val),
    err => console.log(err.message),
    () => console.log('complete')
  );

// Output:
// error : no element in sequence
// #endregion
