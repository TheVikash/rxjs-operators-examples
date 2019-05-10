// switchMap
// turn a value into stream
// use the stream as a new source
// until the original source emit other value

const { Observable, timer, interval } = require('rxjs');
const { switchMap, take, tap } = require('rxjs/operators');

const charecter = Observable.create(observer => {
  observer.next('A');
  setTimeout(() => observer.next('B'), 200);
  setTimeout(() => observer.next('C'), 300);
});

const number = interval(50).pipe(take(5));
// switch to new inner observable when source emits

console.log('# switch to a new source');

charecter
  .pipe(
    tap(x => console.log(`value from sources: ${x}`)),
    switchMap(() => number)
  )
  .subscribe(val => console.log(val), null, () => console.log('complete'));

//   # switch to a new source
//   value from sources: A
//   0
//   1
//   2
//   value from sources: B
//   0
//   value from sources: C
//   0
//   1
//   2
//   3
//   4

setTimeout(() => {
  console.log('\r\n-------------------\r\n');
  console.log('# switch and combine values from two sources');
  console.log('# A is emitted from the source, switchMap then subscribes');
  console.log('# to the timer, Timer emits value at 0 and 150');
  console.log('# which are combined with A and emitted');
  console.log('# Source emits B at 200ms, so the timer setup by A stops');
  console.log('# and the B value kicks off a new Timer');
  charecter
    .pipe(switchMap(() => timer(0, 150).pipe(take(3)), (char, num) => `${char}${num}`))
    .subscribe(v => console.log(v), null, () => console.log('complete'));
}, 1000);

// Output
// A0
// A1
// B0
// C0
// C1
// C2
