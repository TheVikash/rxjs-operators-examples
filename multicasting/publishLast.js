// publishLast
// converts an observable into connectable observable
// skips all event except the last

const { interval } = require('rxjs');
const { publishLast, take } = require('rxjs/operators');

console.log('\r\n-----starting without publishLast-----\r\n');

const source = interval(100).pipe(take(3));
const connectable = source.pipe(publishLast());

connectable.subscribe(v => console.log(`subscriber 1 recieved: ${v}`), null, () =>
  console.log('subscriber 1 completes')
);
connectable.subscribe(v => console.log(`subscriber 2 recieved: ${v}`), null, () =>
  console.log('subscriber 2 completes')
);
connectable.connect();

setTimeout(() => {
  console.log('---------------delay-------------');
  connectable.subscribe(v => console.log(`subscriber 3 recieved : ${v}`), null, () =>
    console.log(`subscriber 3 completed`)
  );
}, 2000);
