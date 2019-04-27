// concatAll

const { of } = require('rxjs');
const { concatAll } = require('rxjs/operators');

const workindDays = of('Mondays', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');
const weekends = of('Saturday', 'Sunday');

console.log('# concat working days as weekends');
of(workindDays, weekends)
  .pipe(concatAll())
  .subscribe(val => console.log(val));

// Output
// # concat working days as weekends
// Mondays
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
