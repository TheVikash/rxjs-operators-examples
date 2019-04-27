// min
// find a min value within the stream
// the definition can be defined from comparator function

const { of } = require('rxjs');
const { min } = require('rxjs/operators');

console.log('#min is: ');
of(1, 2, -3, -1, -2, 3)
  .pipe(min())
  .subscribe(v => console.log(v));

// Output
// -3

console.log('#min is');
of(1, 2, -3, -1, -2, 3)
  .pipe(min((x, y) => (Math.abs(x) > Math.abs(y) ? 1 : -1)))
  .subscribe(val => console.log(val));

// output
1;
