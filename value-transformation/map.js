// map
// transform value according to the given function

const { of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

console.log('# square every number');

of(1, 2, 3)
  .pipe(map(x => x * x))
  .subscribe(v => console.log(v));

// Output
// # square every number
// 1
// 4
// 9

console.log('\r\n-----------------\r\n');
console.log('# square every even number');
of(1, 2, 3, 4)
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x * x)
  )
  .subscribe(v => console.log(v));

// Output
// # square every even number
// 4
// 16
