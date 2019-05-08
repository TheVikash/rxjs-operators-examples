// reduce

const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

console.log('# reduce emits cumulative value');

of(1, 2, 3)
  .pipe(reduce((acc, val) => acc + val, 0))
  .subscribe(val => console.log(val));

// Output
// # reduce emits cumulative value
// 6
