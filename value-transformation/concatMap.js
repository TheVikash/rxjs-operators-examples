// concatMap
// map each value of source into function
// emit the result of the function

const { of } = require('rxjs');
const { concatMap, delay } = require('rxjs/operators');

console.log('# concat Map to [x, 3*x]');

of(1, 2, 3)
  .pipe(concatMap(x => [x, 3 * x]))
  .subscribe(x => console.log(x));

// Output
// # concat Map to [x, 3*x]
// 1
// 3
// 2
// 6
// 3
// 9

console.log('/n----------------------------/n');
setTimeout(() => {
  // delay until previous example complete
  of(10, 1500, 1000, 500)
    .pipe(concatMap(x => of(`emitting after delay: ${x}`).pipe(delay(x))))
    .subscribe(x => console.log(x));
}, 1000);
