// timestamp
// wrap the value with the timestamp at which it was emitted

const { Observable } = require('rxjs');
const { timestamp } = require('rxjs/operators');

const source = Observable.create(observer => {
  setTimeout(() => observer.next('A'), 100);
  setTimeout(() => observer.next('B'), 300);
  setTimeout(() => observer.next('C'), 600);
});

source.pipe(timestamp()).subscribe(val => console.log(val));

// Output
// Timestamp { value: 'A', timestamp: 1557056454795 }
// Timestamp { value: 'B', timestamp: 1557056454995 }
// Timestamp { value: 'C', timestamp: 1557056455295 }
