// scan

const { of } = require('rxjs');
const { scan } = require('rxjs/operators');

console.log('# scan emits cumulative value');

of(1, 2, 3)
  .pipe(scan((acc, val) => acc + val, 0))
  .subscribe(val => console.log(val));

// Output
// # scan emits cumulative value
// 1
// 3
// 6
