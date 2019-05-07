// delayWhen
// delay emission based on newly created observable

const { of, interval } = require('rxjs');
const { delayWhen } = require('rxjs/operators');

console.log('#t0: all three events emitted from the source');
console.log('# The first item will be delayed until t0 + 1000');
console.log('# The second item will be delayed until t0 + 2000');
console.log('# The third item will be delayed until t0 + 3000');

of(1, 2, 3)
  .pipe(
    delayWhen(x => {
      return interval(x * 1000);
    })
  )
  .subscribe(val => console.log(val));
