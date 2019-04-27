// window
// similar to buffer but emit observable instead of array

const { interval } = require('rxjs');
const { window, switchMap, toArray, take } = require('rxjs/operators');

console.log('# emit the window(observable) after 1000 ms');

interval(100)
  .pipe(
    window(interval(1000)),
    take(3),
    switchMap(w => w.pipe(toArray()))
  )
  .subscribe(d => console.log(d));
