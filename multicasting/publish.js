// publish
// Convert an observable into connectable observable
// ConnectableObservable acts as proxy for subscribers
// The technique is often used to prevent multiple side effects
// When the source emits value to the multiple subscriptions

// ConnectableObservable waits until 'connected' to start emitting values

const { Observable } = require('rxjs');
const { publish } = require('rxjs/operators');

console.log('\r\n-----starting without publish-----\r\n');

const source = Observable.create(observer => {
  console.log('----Observable created--');
  let counter = 0;
  const interval = setInterval(() => {
    console.log(`value from source : ${counter}`);
    observer.next(counter++);
    if (counter > 1) {
      clearInterval(interval);
    }
  });
});

source.subscribe(v => console.log('subscriber 1 recieved : ' + v));
source.subscribe(v => console.log('subscriber 2 recieved : ' + v));

setTimeout(() => {
  console.log('\r\n--------------------------\r\n');

  console.log('starting with publish ...');

  const connectable = source.pipe(publish());
  connectable.subscribe(v => console.log(`subscriber 1 recieved: ${v}`));
  connectable.subscribe(v => console.log(`subscriber 2 recieved: ${v}`));
  connectable.connect();
}, 1000);
