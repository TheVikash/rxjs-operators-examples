// windowTime

const { timer } = require('rxjs');
const { windowTime, switchMap, take, toArray } = require('rxjs/operators');

const source = timer(0, 100).pipe(take(9));
console.log('# emit buffer after 200ms');

source
  .pipe(
    windowTime(200),
    switchMap(w => w.pipe(toArray()))
  )
  .subscribe(d => console.log(d));

//output
// [ 0, 1 ]
// [ 2, 3 ]
// [ 4, 5 ]
// [ 6, 7 ]
// [ 8 ]
