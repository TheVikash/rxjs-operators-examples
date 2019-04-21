// retry
// resubscribe on error

const { of } = require('rxjs');
const { retry, map } = require('rxjs/operators');

console.log('# retry two times ');
of('a', 1)
  .pipe(
    map(x => x.toUpperCase()),
    retry(2)
  )
  .subscribe(x => console.log(x), err => console.log(err.message));

// output
// # retry two times
// A
// A
// A
// x.toUpperCase is not a function
