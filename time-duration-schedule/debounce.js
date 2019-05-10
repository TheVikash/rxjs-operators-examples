// debounce
// emit values after inner observable completes or emits
// if no new value from the source

const { timer, interval } = require('rxjs');
const { debounce, take, tap } = require('rxjs/operators');

timer(0, 1000)
  .pipe(
    tap(x =>
      console.log(`source: ${x} at ${x * 1000} ms. Interval${x} subscribed.`)
    ),
    debounce(x => {
      let time = 900;
      let totalTime = x * 1000 + 900;
      if (x === 1) {
        time = 1500;
      }
      return interval(time).pipe(
        tap(() => console.log(`*Interval${x} emits at ${totalTime} ms`))
      );
    }),
    take(3)
  )
  .subscribe(val => console.log(`recieved by subscriber : ${val}`));

//output
// source: 0 at 0 ms. Interval0 subscribed.
// *Interval0 emits at 900 ms
// recieved by subscriber : 0
// source: 1 at 1000 ms. Interval1 subscribed.
// source: 2 at 2000 ms. Interval2 subscribed.
// *Interval2 emits at 2900 ms
// recieved by subscriber : 2
// source: 3 at 3000 ms. Interval3 subscribed.
// *Interval3 emits at 3900 ms
// recieved by subscriber : 3
