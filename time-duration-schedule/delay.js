// delay
// the emission is delayed
// for a given millisecond
// or until a specified time

const { of } = require('rxjs');
const { delay } = require('rxjs/operators');

console.log('starting ....');
of('delay the emission by one second', 'only the first is delayed')
  .pipe(delay(1000))
  .subscribe(val => console.log(val));

const d = new Date(Date.now() + 3000);
of('delay the emission by given date', 'only the first is delayed')
  .pipe(delay(d))
  .subscribe(x => console.log(x));
