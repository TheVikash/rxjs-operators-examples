// windowCount

const { timer } = require('rxjs');
const { windowCount, switchMap, take, toArray } = require('rxjs/operators');

//#region example 1

const source = timer(0, 100).pipe(take(9));
console.log('# buffer 2 items');

source
  .pipe(
    windowCount(2),
    switchMap(w => w.pipe(toArray()))
  )
  .subscribe(d => console.log(d));

// output
// [ 0, 1 ]
// [ 2, 3 ]
// [ 4, 5 ]
// [ 6, 7 ]
// [ 8 ]

// #endregion

// #region example 2

setTimeout(() => {
  console.log('# buffer 2 items then skip 1 item');
  source
    .pipe(
      windowCount(2, 3), // cut after 3 values but add only 2 values
      switchMap(w => w.pipe(toArray()))
    )
    .subscribe(v => console.log(v));
}, 100);

//output
// [ 0, 1 ]
// [ 3, 4 ]
// [ 6, 7 ]
// []

//endregion
