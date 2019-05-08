// exhaustMap

const { of } = require('rxjs');
const { exhaustMap, delay } = require('rxjs/operators');

console.log('# map each emitted valute to generated observable');
console.log('# and emit each observables value');
console.log('# the third value results in the observable');
console.log('# that doesnt complete before the fourth value is emitted');
console.log('# so the fourth value is dropped \r\n');

of('A', 'B', 'Blocker', 'c')
  .pipe(
    exhaustMap(x => {
      switch (x) {
        case 'A':
          return of(x, x.toLowerCase());
        case 'B':
          return of(1, 2, 3, 4);
        case 'Blocker':
          return of(x).pipe(delay(10));
        default:
          return of(x);
      }
    })
  )
  .subscribe(val => console.log(val));

// Output
// a
// 1
// 2
// 3
// 4
// Blocker
