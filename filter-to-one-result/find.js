// find
// emit the first element that matches a given condition

const { of } = require('rxjs');
const { find } = require('rxjs/operators');

console.log('# first matching value: ');
of(1, 2, 3, 4, 5, 6, 7, 8)
  .pipe(find(x => x > 3))
  .subscribe(val => console.log(val));

// output
// # first matching value:
// 4
