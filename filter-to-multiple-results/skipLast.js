// skipLast
// ignore the last nth emits

const { of } = require('rxjs');
const { skipLast } = require('rxjs/operators');

console.log('# skip the last 2 values');

of(1, 2, 3)
  .pipe(skipLast(2))
  .subscribe(x => console.log(x));
