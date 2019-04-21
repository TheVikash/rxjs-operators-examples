// takeLast
// emit the last n values and complete

const { of, interval } = require('rxjs');
const { takeLast } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log('# take the last 3 values');
source
  .pipe(takeLast(3))
  .subscribe(d => console.log(d), null, () => console.log('complete'));
