// combineAll
// combine latest values from multiple observables
// once all source have emitted

const { of, interval } = require('rxjs');
const { combineAll, take, delay } = require('rxjs/operators');

console.log('# once source completes without emitting values');
console.log('# the combined source complete without emitting value');
const source1 = of();
const source2 = of(1, 2, 3);

of(source1, source2)
  .pipe(combineAll())
  .subscribe(([val1, val2]) => console.log(val1, val2));

//output
// none

console.log('/n-------------------/n');

console.log('# latest values from all sources');
const source3 = of(1, 2, 3);
const source4 = interval(200).pipe(take(3));
const source5 = of(1, 2, 3).pipe(delay(5000));
const source6 = of('a', 'b', 'c');

of(source3, source4, source5, source6)
  .pipe(combineAll())
  .subscribe(([val1, val2, val3, val4]) => {
    console.log(`${val1}-${val2}-${val3}-${val4}`);
  });
