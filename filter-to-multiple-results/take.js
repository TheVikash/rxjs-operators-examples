// take
// the first nth emits and complete

const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

const source = timer(0, 100);
console.log('# take the first 5 values');
source
  .pipe(take(5))
  .subscribe(x => console.log(x), null, () => console.log('complete'));

// output
