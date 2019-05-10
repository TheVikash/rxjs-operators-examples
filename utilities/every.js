// every
// determine if every value meets the given condition

const { of } = require('rxjs');
const { every, tap } = require('rxjs/operators');

console.log('# is every number is even');

of(1, 2, 3, 4)
  .pipe(
    tap(x => console.log('evaluating x: ' + x)),
    every(x => x % 2 === 0)
  )
  .subscribe(val => console.log(val));

// output
// # is every number is even
// evaluating x: 1
// false
