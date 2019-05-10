// count
// emit the total number of emissions

const { of } = require('rxjs');
const { count } = require('rxjs/operators');

console.log('# count the time of emissions');
of(-3, -2, -1, 0, 1, 2, 3)
  .pipe(count())
  .subscribe(x => console.log(x));

// Output
// # count the time of emissions
// 7
