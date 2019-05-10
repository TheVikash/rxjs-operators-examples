// igoreElements
// ignore all emitted values
// only emit the error or complete event

const { of } = require('rxjs');
const { ignoreElements } = require('rxjs/operators');

of(1, 2)
  .pipe(ignoreElements())
  .subscribe(
    v => console.log(v),
    e => console.log(e.message),
    () => console.log('complete')
  );

// output
// complete
