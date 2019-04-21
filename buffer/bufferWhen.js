// bufferWhen
// determines the closing point of buffer

const { interval } = require('rxjs');
const { bufferWhen, take, tap } = require('rxjs/operators');

console.log('# vary buffer clearing based on value from the interval');
let x = 0;
interval(500)
  .pipe(
    take(10),
    tap(i => (x = i)),
    bufferWhen(() => {
      // vary buffer closing
      if (x < 5) {
        return interval(1000);
      }
      return interval(500);
    })
  )
  .subscribe(d => console.log(d));

// Output
