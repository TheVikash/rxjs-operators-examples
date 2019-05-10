// auditTime
// emit the most recent value within the given period of time

const { interval } = require('rxjs');
const { take, auditTime, tap } = require('rxjs/operators');

console.log('# emit the last value emitted every second');

interval(500)
  .pipe(
    tap(x => console.log('emitted : ' + x)),
    auditTime(1000),
    take(3)
  )
  .subscribe(d => console.log('recieved by subscribers: ' + d));

// Output
// # emit the last value emitted every second
// emitted : 0
// emitted : 1
// emitted : 2
// recieved by subscribers: 2
// emitted : 3
// emitted : 4
// recieved by subscribers: 4
// emitted : 5
// emitted : 6
// recieved by subscribers: 6
