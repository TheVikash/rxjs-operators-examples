// elementAt
// emits only (n-1)th emitted value

const { of } = require('rxjs');
const { elementAt } = require('rxjs/operators');

console.log('# emit only the third value');
of(1, 2, 3)
  .pipe(elementAt(1))
  .subscribe(val => console.log(val));

//output
// # emit only the third value
// 2
