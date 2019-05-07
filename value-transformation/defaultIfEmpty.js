// defaultIfEmpty
// emit the given value if source does not emit anything

const { of } = require('rxjs');
const { defaultIfEmpty } = require('rxjs/operators');

console.log('# defaultIfEmpty is used');

of()
  .pipe(defaultIfEmpty(-1))
  .subscribe(x => console.log(x));

// output
// # defaultIfEmpty is used
// -1
