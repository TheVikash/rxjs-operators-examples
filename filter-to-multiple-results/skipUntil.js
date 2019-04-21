// skitUntil
// skip until the notifier sends signal

const { timer } = require('rxjs');
const { skipUntil, take } = require('rxjs/operators');

console.log('# ignores values before the notifier sends the signal');

timer(0, 1000)
  .pipe(
    take(6),
    skipUntil(timer(3000))
  )
  .subscribe(x => console.log(x));

//output
// # ignores values before the notifier sends the signal
// 3
// 4
// 5
