// publishBehaviour
// same as publish
// returns immediate an specified initial value

const { interval } = require('rxjs');
const { publishBehavior, tap, take } = require('rxjs/operators');

console.log('\r\n-----starting without publishReplay-----\r\n');

const source = interval(100).pipe(
  tap(x => console.log(`---${x}`)),
  take(3)
);
const connectable = source.pipe(publishBehavior('hello world'));
connectable.subscribe(v => console.log(`subscriber 1 recieved: ${v}`));
connectable.subscribe(v => console.log(`subscriber 2 recieved: ${v}`));

setTimeout(() => {
  connectable.connect();
}, 1000);
