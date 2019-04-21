// skipWhile
// skip the value while condition held true
// once the condition becomes false, emit the coming values as normal

const { of } = require('rxjs');
const { skipWhile } = require('rxjs/operators');

console.log('# skip while the condition is true');
of(1, 2, 3, 1, 2, 3, 4)
  .pipe(skipWhile(val => val < 3))
  .subscribe(x => console.log(x));

//output
// # skip while the condition is true
// 3
// 1
// 2
// 3
// 4
