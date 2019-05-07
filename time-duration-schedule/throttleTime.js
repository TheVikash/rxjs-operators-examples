// throttleTime
// emit the first the value
// drop all coming next events
// after a given time
// remove the block and wait for the next value

const { timer } = require('rxjs');
const { take, throttleTime } = require('rxjs/operators');
const { performance } = require('perf_hooks');

console.log('# emit one value after 10ms ');
console.log('# but only pass to subscribers after 1000ms');
timer(0, 10)
  .pipe(
    take(300),
    throttleTime(1000)
  )
  .subscribe(val => console.log(`${val} at ${Math.trunc(performance.now() / 1000)} seconds`));

// Output
// 0 at 0 seconds
// 77 at 1 seconds
// 156 at 2 seconds
// 234 at 3 seconds
