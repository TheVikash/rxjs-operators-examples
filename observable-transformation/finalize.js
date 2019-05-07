// finalize
// register a callback for complete event

const { of } = require('rxjs');
const { finalize, tap } = require('rxjs/operators');

of(1)
  .pipe(finalize(() => console.log('finalize')))
  .subscribe(val => console.log(val), null, () => console.log('complete'));

// Output
// 1
// complete
// finalize

console.log('\r\n---------------\n\r');

of('a', 1)
  .pipe(
    tap(z => z.toUpperCase()),
    finalize(() => console.log('finalize'))
  )
  .subscribe(
    x => console.log(x),
    err => console.log(err.message),
    () => console.log('complete')
  );
