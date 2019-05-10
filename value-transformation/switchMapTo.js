// switchMapTo
// for every value, use another predefined stream to get the value
// until the original source emit another value

const { Observable, of } = require('rxjs');
const { switchMapTo } = require('rxjs/operators');

const number = Observable.create(observer => {
  observer.next(1);
  setTimeout(() => observer.next(2), 200);
});

console.log('# switch n to a stream of A and B');

number.pipe(switchMapTo(of('a', 'b'))).subscribe(val => console.log(val));

// # switch n to a stream of A and B
// a
// b
// a
// b
