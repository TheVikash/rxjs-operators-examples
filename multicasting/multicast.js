// multicast
// create a new ConnectableObservable

const { Subject, Observable } = require('rxjs');
const { multicast, tap } = require('rxjs/operators');

const obs = Observable.create(observer => {
  console.log('--- Observable subscribed');
  let counter = 0;
  const inter = setInterval(() => {
    console.log(`- value from source : ${counter}`);
    observer.next(counter++);
    if (counter > 1) {
      clearInterval(inter);
    }
  }, 100);
});

const source = obs.pipe(tap(v => console.log('this is the side effect: ' + v)));

console.log('starting without multicast');

source.subscribe(v => console.log('subscriber 1 received: ' + v));

source.subscribe(v => console.log('subscriber 2 received: ' + v));

setTimeout(() => {
  console.log('\r\n--------------------------\r\n');

  console.log('starting with multicast');

  const proxy = new Subject();
  const connectable = source.pipe(multicast(proxy));

  proxy.subscribe(v => console.log(`subscriber 1 recieved: ${v}`));

  proxy.subscribe(v => console.log(`subscriber 2 recieved: ${v}`));

  connectable.connect();
}, 1000);
