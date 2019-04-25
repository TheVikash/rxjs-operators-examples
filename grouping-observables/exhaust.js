// exhaust
// handles a sequence of observables
// if next observable emits before its prior is completed, drop second observable entirely

const { of } = require('rxjs');
const { exhaust, delay } = require('rxjs/operators');

const source1 = of('A', 'B', 'C').pipe(delay(100));
const source2 = of('D');

of(source1, source2)
  .pipe(exhaust())
  .subscribe(val => console.log(val));
