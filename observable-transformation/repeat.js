// repeat
// re-emit emitted values

const { of } = require('rxjs');
const { repeat } = require('rxjs/operators');

console.log('# emit twice ');

of(1, 2, 3)
  .pipe(repeat(2))
  .subscribe(val => console.log(val), null, () => console.log('complete'));

// Output

// # emit twice
// 1
// 2
// 3
// 1
// 2
// 3
// complete
