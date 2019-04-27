// windowToggle
// open a new buffer whenever recieved open signal
// closes the current buffer when recieved the close signal

const { timer } = require('rxjs');
const { windowToggle, switchMap, take, toArray } = require('rxjs/operators');

console.log('# open a new buffer in every 500ms');
console.log('# close the buffer in 200ms ');
console.log('# ignore those come between 200ms and 500ms');

const opening = timer(0, 500);
const closing = () => timer(200);

timer(0, 100)
  .pipe(
    take(36),
    windowToggle(opening, closing),
    switchMap(w => w.pipe(toArray()))
  )
  .subscribe(d => console.log(d));

// Output
// [ 0, 1 ]
// [ 5, 6 ]
// [ 10, 11 ]
// [ 15, 16 ]
// [ 20, 21 ]
// [ 25, 26 ]
// [ 30, 31 ]
// [ 35 ]
