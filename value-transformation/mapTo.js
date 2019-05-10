// mapTo
// transform all value to the sampe output

const { of } = require('rxjs');
const { mapTo } = require('rxjs/operators');

console.log('# map to the const string');

of(1, 2, 3, 4)
  .pipe(mapTo('x'))
  .subscribe(val => console.log(val));

// Output
// # map to the const string
// x
// x
// x
// x
