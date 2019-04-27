// single
// check that a single value matches the specified condition
// if a single value matches, then emit the value
// if no value matches, emit undefined
// if more than one value emits then emit error

const { of } = require('rxjs');
const { single } = require('rxjs/operators');

console.log('the one match');

of(1, 2, 3)
  .pipe(single(x => x % 2 === 0))
  .subscribe(val => console.log(val), null, () => console.log('complete'));
//output
// the one match
// 2
// complete

console.log('\n-----------------');
console.log('no values matches');
of(1, 2, 3)
  .pipe(single(x => x > 3))
  .subscribe(val => console.log(val), null, () => console.log('complete'));

//output
// no values matches
// undefined
// complete

console.log('\n-----------------');
console.log('multiple value matches');
of(1, 2, 3)
  .pipe(single(x => x < 3))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('complete')
  );

// output
// multiple value matches
// Sequence contains more than one element
