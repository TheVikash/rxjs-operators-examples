// sampleTime
// emit the most recent value given within the given period

const { interval } = require('rxjs');
const { sampleTime, take, tap } = require('rxjs/operators');

console.log('# emit the first value and then last value emitted every second');

interval(500)
  .pipe(
    tap(x => console.log('value emitted : ' + x)),
    sampleTime(1000),
    take(3)
  )
  .subscribe(d => console.log('recieved by subscribers: ' + d));

//   # emit the first value and then last value emitted every second
//   value emitted : 0
//   recieved by subscribers: 0
//   value emitted : 1
//   value emitted : 2
//   recieved by subscribers: 2
//   value emitted : 3
//   value emitted : 4
//   recieved by subscribers: 4
