// mergeMapTo
// every value is mapped into observable
// emit the combine value of observable and the current value

const { of, interval } = require('rxjs');
const { mergeMapTo, take } = require('rxjs/operators');

console.log('merge map to a constant');

of(1, 2)
  .pipe(mergeMapTo(of('same', 'inner', 'value')))
  .subscribe(val => console.log(val));

// output
// merge map to a constant
// same
// inner
// value
// same
// inner
// value

console.log('\r\n--------------------------\r\n');

console.log('merge map with result combinator function');

of('ping')
  .pipe(
    mergeMapTo(interval(100).pipe(take(3)), (sourceVal, internalVal) => {
      sourceVal = internalVal === 1 ? 'pong' : sourceVal;
      return `${sourceVal}${internalVal * 2}`; // combine result
    })
  )
  .subscribe(val => console.log(val));

// output
// merge map with result combinator function
// ping0
// pong2
// ping4
