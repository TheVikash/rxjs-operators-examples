// publishReplay
// converts an observable into connectable observable
// skips all event except the last nth

const { interval } = require('rxjs');
const { publishReplay, take } = require('rxjs/operators');

console.log('\r\n-----starting without publishLast-----\r\n');

const source = interval(100).pipe(take(3));
const connectable = source.pipe(publishReplay(2));

connectable.subscribe(v => console.log(`subscriber 1 recieved: ${v}`), null, () =>
  console.log('subscriber 1 completes')
);
connectable.connect();

setTimeout(() => {
  console.log('---------------delay-------------');
  connectable.subscribe(v => console.log(`subscriber 2 recieved: ${v}`), null, () =>
    console.log('subscriber 2 completes')
  );
}, 2000);
