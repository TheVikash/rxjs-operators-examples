// tap
// intercept the value without modifying it
// often used as side effect such as logging

const { timer } = require('rxjs');
const { tap, take } = require('rxjs/operators');

console.log('# tap on every value');
timer(0, 100)
  .pipe(
    take(2),
    tap(val => {
      console.log('side effect via tap for value', val);
      return 'abc'; // this does nothing
    })
  )
  .subscribe(val => console.log(val));
