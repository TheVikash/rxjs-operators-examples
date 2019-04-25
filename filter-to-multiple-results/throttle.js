// throttle

const { interval, timer } = require('rxjs');
const { tap, take, throttle } = require('rxjs/operators');

const source = interval(100);

source
  .pipe(
    take(10),
    tap(x => console.log(`emitted from the source: ${x}`)),
    throttle(y => {
      console.log(`used to calculate next observable: ${y}`);
      return timer(500);
    })
  )
  .subscribe(z => console.log(`recieved by subscriber ${z}`));

// output
// emitted from the source: 0
// recieved by subscriber 0
// used to calculate next observable: 0
// emitted from the source: 1
// emitted from the source: 2
// emitted from the source: 3
// emitted from the source: 4
// emitted from the source: 5
// emitted from the source: 6
// recieved by subscriber 6
// used to calculate next observable: 6
// emitted from the source: 7
// emitted from the source: 8
// emitted from the source: 9
