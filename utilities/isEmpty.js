// isEmpty

const { of } = require('rxjs');
const { isEmpty } = require('rxjs/operators');

console.log('# empty source observable');
of()
  .pipe(isEmpty())
  .subscribe(val => console.log(val));

// output
// true

console.log('\n\n# non emtpy source observable');

of(1, 2, 3)
  .pipe(isEmpty())
  .subscribe(val => console.log(val));

// Output
// false
