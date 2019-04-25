// mergeAll
// merge a list of observables

const { of, timer } = require('rxjs');
const { mergeAll, take, delay } = require('rxjs/operators');

const source1 = timer(0, 1).pipe(take(10));
const source2 = of('Monday', 'Tuesday', 'Wednesday', 'Thursday').pipe(
  delay(15)
);
const source3 = of('Friday', 'Saturday', 'Sunday').pipe(delay(5));

console.log('# merge workind days and weekends');

of(source1, source2, source3)
  .pipe(mergeAll(3))
  .subscribe(val => console.log(val));

// Output
// # merge workind days and weekends
// 0
// 1
// Friday
// Saturday
// Sunday
// 2
// 3
// Monday
// Tuesday
// Wednesday
// Thursday
// 4
// 5
// 6
// 7
// 8
// 9
