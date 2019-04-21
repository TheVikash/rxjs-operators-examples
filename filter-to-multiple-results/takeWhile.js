//takeWhile
// take the value while the condition held true
// once the condition becomes false it emits complete event

const { of } = require('rxjs');
const { takeWhile } = require('rxjs/operators');

console.log('# take while condition is true');
of(1, 2, 3, 4)
  .pipe(takeWhile(x => x < 4))
  .subscribe(x => console.log(x), null, () => console.log('complete'));
